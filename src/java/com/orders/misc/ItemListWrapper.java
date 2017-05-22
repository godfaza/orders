/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.misc;

import com.orders.dao.ItemEntity;
import java.util.List;

/**
 *
 * @author user
 */
public class ItemListWrapper {
   private  List<ItemEntity> data;
   private boolean success;
   private int total;

    public ItemListWrapper(List<ItemEntity> data, boolean success, int total) {
        this.data = data;
        this.success = success;
        this.total = total;
    }

    public List<ItemEntity> getData() {
        return data;
    }

    public boolean isSuccess() {
        return success;
    }

    public int getTotal() {
        return total;
    }

    public void setData(List<ItemEntity> data) {
        this.data = data;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public void setTotal(int total) {
        this.total = total;
    }
   
    
}
