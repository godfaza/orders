/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders;

import com.orders.dao.UserEntity;
import com.orders.misc.Result;
import com.owlike.genson.Genson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.commons.io.IOUtils;

/**
 *
 * @author root
 */
public class LoginServlet extends HttpServlet {

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
            out.println("<title>Servlet LoginServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet LoginServlet at " + request.getContextPath() + "</h1>");
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

        //  processRequest(request, response);
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
        response.setContentType("application/json;charset=UTF-8");

        //    String json = IOUtils.toString(request.getInputStream());
        //        PrintWriter out = response.getWriter();
        //        out.println(username);  
        //   HttpSession ses = request.getSession();
        //   ses.setMaxInactiveInterval(1);
        String username = request.getParameter("user");
        String password = request.getParameter("password");

        EntityManagerFactory factory;
        factory = Persistence.createEntityManagerFactory("OrdersPU");
        EntityManager em = factory.createEntityManager();
        Query q = em.createNamedQuery("UserEntity.findByUsername");
        q.setParameter("username", username);
        List<UserEntity> ulst = (List) q.getResultList();
        PrintWriter out = response.getWriter();
        if (ulst == null || ulst.isEmpty()) {
            Result res = new Result(false, "");
            String json = new Genson().serialize(res);
            out.println(json);
            //    out.println("No such User");  
        } else {

            HttpSession session = request.getSession();

            User user = new User(username);
            session.setAttribute("User", user);
            if (request.getSession(false) == null) {
                
                Result res = new Result(false, "User: " + username + " already in system!");
                String json = new Genson().serialize(res);
                out.println(json);
            } else {
                
                UserEntity u = (UserEntity) ulst.get(0);
                Result res = new Result(true, "Login was succesfull");
                String json = new Genson().serialize(res);
                out.println(json);
            }
            //    out.println("username: " + u.getName() + " password: " + u.getPassword());  
        }

//   PrintWriter out = response.getWriter();
        //   out.println("Ok!");
        //  processRequest(request, response);
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
