/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import javax.servlet.http.*;

/**
 *
 * @author root
 */
public class User implements HttpSessionBindingListener {


    private static Map<User, HttpSession> logins = new ConcurrentHashMap<>();


    private Long id;
    private String username;

    public static Map<User, HttpSession> getLogins() {
        return logins;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public static void setLogins(Map<User, HttpSession> logins) {
        User.logins = logins;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    

    @Override
    public boolean equals(Object other) {
        return (other instanceof User) && (id != null) ? id.equals(((User) other).id) : (other == this);
    }

    @Override
    public int hashCode() {
        return (id != null) ? (this.getClass().hashCode() + id.hashCode()) : super.hashCode();
    }

    @Override
    public void valueBound(HttpSessionBindingEvent event) {
        HttpSession session = logins.remove(this);
        if (session != null) {
            session.invalidate();
        }
        logins.put(this, event.getSession());
    }

    @Override
    public void valueUnbound(HttpSessionBindingEvent event) {
        logins.remove(this);
    }

}