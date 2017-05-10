/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders;

import com.orders.dao.CustomerEntity;

/**
 *
 * @author root
 */
public class CustomerDataWrapper {
    private CustomerEntity customer;

    public CustomerDataWrapper(CustomerEntity customer) {
        this.customer = customer;
    }

    public CustomerDataWrapper() {
    }

    public CustomerEntity getCustomer() {
        return customer;
    }

    public void setCustomer(CustomerEntity customer) {
        this.customer = customer;
    }
    
}

