/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.misc;

import com.orders.dao.OrderElemEntity;
import java.math.BigDecimal;

/**
 *
 * @author root
 */
public class OrderElemExtWrapper {
    
    private int id;
    private int order_id;
    private String item_name;
    private int items_count;
    private BigDecimal item_price;

    public OrderElemExtWrapper(int id, int order_id, String item_name, int items_count, BigDecimal item_price) {
        this.id = id;
        this.order_id = order_id;
        this.item_name = item_name;
        this.items_count = items_count;
        this.item_price = item_price;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }

    public void setItems_count(int items_count) {
        this.items_count = items_count;
    }

    public void setItem_price(BigDecimal item_price) {
        this.item_price = item_price;
    }

    public int getId() {
        return id;
    }

    public int getOrder_id() {
        return order_id;
    }

    public String getItem_name() {
        return item_name;
    }

    public int getItems_count() {
        return items_count;
    }

    public BigDecimal getItem_price() {
        return item_price;
    }

    public OrderElemExtWrapper() {
    }



    public OrderElemExtWrapper(OrderElemEntity e) {
           this.id = e.getId();
        this.order_id = e.getOrderId().getId();
        this.item_name = e.getItemId().getName();
        this.items_count = e.getItemsCount();
        this.item_price = e.getItemPrice();
    
    }


}
