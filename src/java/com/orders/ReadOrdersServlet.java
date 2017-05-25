/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders;

import com.orders.dao.CustomerEntity;
import com.orders.dao.OrdersEntity;
import com.orders.misc.ItemListWrapper;
import com.orders.misc.OrderListWrapper;
import com.orders.misc.OrdersWrapper;
import com.owlike.genson.Genson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author root
 */
public class ReadOrdersServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet ReadOrdersServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet ReadOrdersServlet at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");
        String id = request.getParameter("id");
        String customer_id = request.getParameter("customer_id");
        PrintWriter out = response.getWriter();

        if (id == null) {
            if (customer_id == null) {

                EntityManagerFactory factory;
                factory = Persistence.createEntityManagerFactory("OrdersPU");
                EntityManager em = factory.createEntityManager();
                // read the existing entries and write to json object and then to output stream
                Query q = em.createNamedQuery("OrdersEntity.findAll");
                List<OrdersEntity> cList = q.getResultList();
                //   response.setContentType("text/html;charset=UTF-8");
                //  out.println(cList.get(0).getName());
                List<OrdersWrapper> wr_list = new ArrayList<>();

                for (OrdersEntity oe : cList) {
                    wr_list.add(new OrdersWrapper(oe));
                }

                OrderListWrapper wr = new OrderListWrapper(wr_list, true, wr_list.size());
                String json = new Genson().serialize(wr);
                out.println(json);
            } else {

                EntityManagerFactory factory;
                factory = Persistence.createEntityManagerFactory("OrdersPU");
                EntityManager em = factory.createEntityManager();
                // read the existing entries and write to json object and then to output stream
                Query q = em.createNamedQuery("CustomerEntity.findById");
                q.setParameter("id", Integer.parseInt(customer_id));
                CustomerEntity ce = (CustomerEntity)q.getSingleResult();
                Collection<OrdersEntity> orders = ce.getOrdersEntityCollection();
                List<OrdersWrapper> wr_list = new ArrayList<>();

                for (OrdersEntity oe : orders) {
                    wr_list.add(new OrdersWrapper(oe));
                }

                OrderListWrapper wr = new OrderListWrapper(wr_list, true, wr_list.size());
                String json = new Genson().serialize(wr);
                out.println(json);

            }

        } else {

            /*     EntityManagerFactory factory;
            factory = Persistence.createEntityManagerFactory("OrdersPU");
            EntityManager em = factory.createEntityManager();
            // read the existing entries and write to json object and then to output stream
            Query q = em.createNamedQuery("OrdersEntity.findById");
            q.setParameter("id", Integer.parseInt(id));
            List<OrdersEntity> cList = q.getResultList();
            //   response.setContentType("text/html;charset=UTF-8");
            //  out.println(cList.get(0).getName());

            OrderListWrapper wr = new OrderListWrapper(cList, true, cList.size());
            String json = new Genson().serialize(wr);
            out.println(json);*/
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
