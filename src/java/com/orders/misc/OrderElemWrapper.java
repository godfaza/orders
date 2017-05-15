/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.misc;

import com.orders.dao.OrderElemEntity;
import java.math.BigDecimal;
import java.util.List;

/**
 *
 * @author root
 */
public class OrderElemWrapper {

    private int id;
    private int order_id;
    private int item_id;
    private int items_count;
    private BigDecimal item_price;

    public OrderElemWrapper(int id, int order_id, int item_id, int items_count, BigDecimal item_price) {
        this.id = id;
        this.order_id = order_id;
        this.item_id = item_id;
        this.items_count = items_count;
        this.item_price = item_price;
    }

    public OrderElemWrapper() {
    }
    
    
    public int getId() {
        return id;
    }

    public int getOrder_id() {
        return order_id;
    }

    public int getItem_id() {
        return item_id;
    }

    public int getItems_count() {
        return items_count;
    }

    public BigDecimal getItem_price() {
        return item_price;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public void setItem_id(int item_id) {
        this.item_id = item_id;
    }

    public void setItems_count(int items_count) {
        this.items_count = items_count;
    }

    public void setItem_price(BigDecimal item_price) {
        this.item_price = item_price;
    }
    
    
}
