/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.misc;

import com.orders.dao.UserEntity;
import com.orders.dao.UserEntity;

/**
 *
 * @author root
 */
public class LoginWrapper {
    private int id;
    private String fullname;
    private String username;
    private String password;
    private String email;
    private String group;
    private int customer_id;

    public LoginWrapper(int id, String fullname, String username, String password, String email, String group, int customer_id) {
        this.id = id;
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.email = email;
        this.group = group;
        this.customer_id = customer_id;
    }

    public LoginWrapper() {
    }

    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    


    public String getFullname() {
        return fullname;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public String getGroup() {
        return group;
    }

    public int getCustomer_id() {
        return customer_id;
    }


    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

 
    

 


    public LoginWrapper(UserEntity user)
    {
        this.id = user.getId();
        this.fullname = user.getFullname();
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.email = user.getEmail();
        this.group = user.getGroupId().getName();
        this.customer_id = user.getCustomerId().getId();
    }
    
    
}
