/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import javax.servlet.http.*;

/**
 *
 * @author root
 */
public class User implements HttpSessionBindingListener {

    private static Map<User, HttpSession> logins = new ConcurrentHashMap<>();
    private String username;
    private long id;

    public User(String username) {
        this.username = username;
        this.id = 0;
    }

    public static Map<User, HttpSession> getLogins() {
        return logins;
    }

    public String getUsername() {
        return username;
    }

    public long getId() {
        return id;
    }

    public static void setLogins(Map<User, HttpSession> logins) {
        User.logins = logins;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
       return (username != null) ? (this.getClass().hashCode() + username.hashCode()) : super.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        return (obj instanceof User) && (username != null) ? username.equals(((User) obj).username) : (obj == this);

    }

    @Override
    public void valueBound(HttpSessionBindingEvent event) {

        HttpSession session = logins.get(this);
        if (session != null) {
            event.getSession().invalidate();
            

        } else {
            logins.put(this, event.getSession());
        }

    }

    @Override
    public void valueUnbound(HttpSessionBindingEvent event) {

        logins.remove(this);
    }

}
