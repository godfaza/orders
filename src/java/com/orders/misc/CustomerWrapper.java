/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.misc;

import com.orders.dao.CustomerEntity;
import com.orders.dao.CustomerEntity;
import java.math.BigDecimal;

/**
 *
 * @author root
 */
public class CustomerWrapper {
    private int id;
    private String name;
    private String code;
    private String address;
    private BigDecimal discount;
    private boolean success;

    public CustomerWrapper(int id, String name, String code, String address, BigDecimal discount, boolean success) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.address = address;
        this.discount = discount;
        this.success = success;
    }

    public CustomerWrapper(CustomerEntity e) {
        this.id = e.getId();
        this.name = e.getName();
        this.code = e.getCode();
        this.address = e.getAddress();
        this.discount = e.getDiscount();
        this.success = true;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCode() {
        return code;
    }

    public String getAddress() {
        return address;
    }

    public BigDecimal getDiscount() {
        return discount;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }
    
    
}
