/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders;

import com.orders.dao.ItemEntity;
import com.orders.dao.OrderElemEntity;
import com.orders.misc.JsonReply;
import com.orders.misc.OrderElemListWrapper;
import com.orders.misc.OrderElemWrapper;
import com.orders.misc.OrdersWrapper;
import com.owlike.genson.Genson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.io.IOUtils;

/**
 *
 * @author root
 */
public class CreateOrderElemServlet extends HttpServlet {

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
            out.println("<title>Servlet CreateOrderElemServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet CreateOrderElemServlet at " + request.getContextPath() + "</h1>");
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
        String jsonstring = IOUtils.toString(request.getInputStream());
        response.setContentType("application/json;charset=UTF-8");
        //   response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        if (jsonstring.indexOf('[') == -1) {
            int first = jsonstring.indexOf(":{");
            int last = jsonstring.indexOf("}}");
            String newstr = jsonstring.substring(first + 1, last + 1);
            EntityManagerFactory factory;
            factory = Persistence.createEntityManagerFactory("OrdersPU");
            EntityManager em = factory.createEntityManager();

            OrderElemWrapper oew = new Genson().deserialize(newstr, OrderElemWrapper.class);

            OrderElemEntity oee = new OrderElemEntity(oew);
            em.getTransaction().begin();
            em.persist(oee);
            em.getTransaction().commit();

            em.close();
            JsonReply reply = new JsonReply(true, 1);
            String json = new Genson().serialize(reply);
            out.println(json);

        } else {
            OrderElemListWrapper oeList = new Genson().deserialize(jsonstring, OrderElemListWrapper.class);
            oeList.Save();
            String json = new Genson().serialize(oeList);
            out.println(json);
        }

        //    } catch (Exception e) {
        //        JsonReply reply = new JsonReply(false, 1);
        //        String json = new Genson().serialize(reply);
        //        out.println(json);
        //    }
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
