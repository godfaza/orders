/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.misc;

import com.orders.dao.OrderElemEntity;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author user
 */
public class OrderElemListWrapper {

    private List<OrderElemWrapper> data;
    private boolean success;
    private int total;

    public OrderElemListWrapper(List<OrderElemWrapper> data, boolean success, int total) {
        this.data = data;
        this.success = success;
        this.total = total;
    }

    public void Save() {
        
        EntityManagerFactory factory;
        factory = Persistence.createEntityManagerFactory("OrdersPU");
        EntityManager em = factory.createEntityManager();

        for (OrderElemWrapper oew : this.data) {

            OrderElemEntity oee = new OrderElemEntity(oew);
            em.getTransaction().begin();
            em.persist(oee);
            em.getTransaction().commit();
            
        }
        em.close();
        this.total = data.size();
        this.success = true;
    }

    public OrderElemListWrapper() {
    }

    public List<OrderElemWrapper> getData() {
        return data;
    }

    public boolean isSuccess() {
        return success;
    }

    public int getTotal() {
        return total;
    }

    public void setData(List<OrderElemWrapper> data) {
        this.data = data;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public void setTotal(int total) {
        this.total = total;
    }

}
