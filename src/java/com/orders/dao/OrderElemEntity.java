/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.dao;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author root
 */
@Entity
@Table(name = "OrderElem")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "OrderElemEntity.findAll", query = "SELECT o FROM OrderElemEntity o")
    , @NamedQuery(name = "OrderElemEntity.findById", query = "SELECT o FROM OrderElemEntity o WHERE o.id = :id")
    , @NamedQuery(name = "OrderElemEntity.findByItemsCount", query = "SELECT o FROM OrderElemEntity o WHERE o.itemsCount = :itemsCount")
    , @NamedQuery(name = "OrderElemEntity.findByItemPrice", query = "SELECT o FROM OrderElemEntity o WHERE o.itemPrice = :itemPrice")})
public class OrderElemEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "ITEMS_COUNT")
    private int itemsCount;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "ITEM_PRICE")
    private BigDecimal itemPrice;
    @JoinColumn(name = "ORDER_ID", referencedColumnName = "ID")
    @ManyToOne(optional = false)
    private OrdersEntity orderId;
    @JoinColumn(name = "ITEM_ID", referencedColumnName = "ID")
    @ManyToOne(optional = false)
    private ItemEntity itemId;

    public OrderElemEntity() {
    }

    public OrderElemEntity(Integer id) {
        this.id = id;
    }

    public OrderElemEntity(Integer id, int itemsCount) {
        this.id = id;
        this.itemsCount = itemsCount;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getItemsCount() {
        return itemsCount;
    }

    public void setItemsCount(int itemsCount) {
        this.itemsCount = itemsCount;
    }

    public BigDecimal getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(BigDecimal itemPrice) {
        this.itemPrice = itemPrice;
    }

    public OrdersEntity getOrderId() {
        return orderId;
    }

    public void setOrderId(OrdersEntity orderId) {
        this.orderId = orderId;
    }

    public ItemEntity getItemId() {
        return itemId;
    }

    public void setItemId(ItemEntity itemId) {
        this.itemId = itemId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof OrderElemEntity)) {
            return false;
        }
        OrderElemEntity other = (OrderElemEntity) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.orders.OrderElemEntity[ id=" + id + " ]";
    }
    
}
