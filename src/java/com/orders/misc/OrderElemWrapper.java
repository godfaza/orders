/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.misc;


import com.orders.dao.OrderElemEntity;
import java.util.List;

/**
 *
 * @author root
 */
public class OrderElemWrapper {
    private  List<OrderElemEntity> data;        
   private boolean success;
   private int total;

    public OrderElemWrapper(List<OrderElemEntity> data, boolean success, int total) {
        this.data = data;
        this.success = success;
        this.total = total;
    }

    public List<OrderElemEntity> getData() {
        return data;
    }

    public boolean isSuccess() {
        return success;
    }

    public int getTotal() {
        return total;
    }

    public void setData(List<OrderElemEntity> data) {
        this.data = data;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public void setTotal(int total) {
        this.total = total;
    }
   
}
