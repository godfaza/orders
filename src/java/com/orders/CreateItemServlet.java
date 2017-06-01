/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders;

import com.orders.dao.ItemEntity;
import com.orders.misc.IdGen;
import com.orders.misc.ItemListWrapper;
import com.orders.misc.JsonReply;
import com.orders.misc.JsonReplyTemplate;
import com.owlike.genson.Genson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.io.IOUtils;

/**
 *
 * @author user
 */
public class CreateItemServlet extends HttpServlet {

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
            out.println("<title>Servlet CreateItemServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet CreateItemServlet at " + request.getContextPath() + "</h1>");
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
        IdGen gen = new IdGen();

        if (jsonstring.indexOf('[') == -1) {
            int first = jsonstring.indexOf(":{");
            int last = jsonstring.indexOf("}}");
            String newstr = jsonstring.substring(first + 1, last + 1);
            EntityManagerFactory factory;
            factory = Persistence.createEntityManagerFactory("OrdersPU");
            EntityManager em = factory.createEntityManager();

            ItemEntity ie = new Genson().deserialize(newstr, ItemEntity.class);
            ie.setCode(gen.GenItemId(ie.getName()));

            em.getTransaction().begin();
            em.persist(ie);
            em.getTransaction().commit();

            em.close();
            JsonReplyTemplate<ItemEntity> reply = new JsonReplyTemplate(true, 1,ie);
            String json = new Genson().serialize(reply);
            out.println(json);

        } else {
            ItemListWrapper iList = new Genson().deserialize(jsonstring, ItemListWrapper.class);
            iList.Save();
            String json = new Genson().serialize(iList);
            out.println(json);
        }
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
