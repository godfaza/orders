/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.misc;

/**
 *
 * @author root
 * @param <T>
 */


public class JsonReplyTemplate<T> {
    private boolean success;
    private int total;
    private T data;

    public JsonReplyTemplate() {
    }

    public JsonReplyTemplate(boolean success, int total, T data) {
        this.success = success;
        this.total = total;
        this.data = data;
    }

    public boolean isSuccess() {
        return success;
    }

    public int getTotal() {
        return total;
    }

    public T getData() {
        return data;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public void setData(T data) {
        this.data = data;
    }
    
    
}
