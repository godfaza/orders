/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders;

import com.orders.dao.CustomerEntity;
import com.orders.dao.ItemEntity;
import com.orders.dao.OrderElemEntity;
import com.orders.dao.OrdersEntity;
import com.orders.misc.ItemsWrapper;
import com.orders.misc.JsonReplyTemplate;
import com.orders.misc.OrderElemExtWrapper;
import com.orders.misc.OrderElemWrapper;
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
public class ReadOrderElemServlet extends HttpServlet {

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
            out.println("<title>Servlet ReadOrderElemServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet ReadOrderElemServlet at " + request.getContextPath() + "</h1>");
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
        String order_id = request.getParameter("order_id");
        PrintWriter out = response.getWriter();

        if (order_id != null) {

            EntityManagerFactory factory;
            factory = Persistence.createEntityManagerFactory("OrdersPU");
            EntityManager em = factory.createEntityManager();
       //     em.getEntityManagerFactory().getCache().evictAll();
            // read the existing entries and write to json object and then to output stream
            Query q = em.createNamedQuery("OrdersEntity.findById");
            q.setParameter("id", Integer.parseInt(order_id));
            OrdersEntity oe = (OrdersEntity) q.getSingleResult();
            //обновляем OrdersEntity - без этого коллекция дочерних эл-тов возвращается
            //пустой до перезарузки tomcat
            //еще можно обновить кэш eclipselink так: em.getEntityManagerFactory().getCache().evictAll();
            em.refresh(oe);
            Collection<OrderElemEntity> elements = oe.getOrderElemEntityCollection();
            List<OrderElemExtWrapper> wr_list = new ArrayList<>();

            for (OrderElemEntity e : elements) {
                wr_list.add(new OrderElemExtWrapper(e));
            }

            JsonReplyTemplate<List<OrderElemExtWrapper>> reply = new JsonReplyTemplate(true, wr_list.size(),wr_list);
            String json = new Genson().serialize(reply);
            out.println(json);
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
