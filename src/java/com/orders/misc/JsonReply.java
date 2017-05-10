/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.misc;

/**
 *
 * @author root
 */
public class JsonReply {
    private boolean success;
    private int total;

    public JsonReply(boolean success, int total) {
        this.success = success;
        this.total = total;
    }

    public boolean isSuccess() {
        return success;
    }

    public int getTotal() {
        return total;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public void setTotal(int total) {
        this.total = total;
    }
    
    
}
