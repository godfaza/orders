/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.misc;

import com.orders.User;
import com.orders.dao.UserEntity;
import com.owlike.genson.Genson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author root
 */
public class UserRights {

    public UserRights() {
    }

    public boolean IsAdmin(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession(false);
        PrintWriter out = response.getWriter();
        if (session != null) {
            for (Map.Entry<User, HttpSession> entry : User.getLogins().entrySet()) {
                HttpSession ses = entry.getValue();
                if (session.equals(ses)) {
                    String username = entry.getKey().getUsername();
                    EntityManagerFactory factory;
                    factory = Persistence.createEntityManagerFactory("OrdersPU");
                    EntityManager em = factory.createEntityManager();
                    Query q = em.createNamedQuery("UserEntity.findByUsername");
                    q.setParameter("username", username);
                    UserEntity u = (UserEntity) q.getSingleResult();
                    if (u.getGroupId().getName().equals("user")) {
                        em.close();
                        JsonReply reply = new JsonReply(false, 1);
                        String json = new Genson().serialize(reply);
                        out.println(json);
                        return false;
                    }
                    em.close();
                }
            }
        }
        return true;
    }

}
