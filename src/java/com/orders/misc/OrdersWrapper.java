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
public class OrdersWrapper {
    private int id;
    private String order_date;
    private long order_number;
    private String shipment_date;
    private String status;
    private int customer_id;

    public OrdersWrapper() {
    }

    
    public OrdersWrapper(int id, String order_date, long order_number, String shipment_date, String status, int customer_id) {
        this.id = id;
        this.order_date = order_date;
        this.order_number = order_number;
        this.shipment_date = shipment_date;
        this.status = status;
        this.customer_id = customer_id;
    }

    public int getId() {
        return id;
    }

    public String getOrder_date() {
        return order_date;
    }

    public long getOrder_number() {
        return order_number;
    }

    public String getShipment_date() {
        return shipment_date;
    }

    public String getStatus() {
        return status;
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setOrder_date(String order_date) {
        this.order_date = order_date;
    }

    public void setOrder_number(long order_number) {
        this.order_number = order_number;
    }

    public void setShipment_date(String shipment_date) {
        this.shipment_date = shipment_date;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }
    
    
}
