/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.dao;

import com.orders.misc.OrdersWrapper;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import java.text.*;
import java.util.Locale;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author root
 */
@Entity
@Table(name = "Orders")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "OrdersEntity.findAll", query = "SELECT o FROM OrdersEntity o")
    , @NamedQuery(name = "OrdersEntity.findById", query = "SELECT o FROM OrdersEntity o WHERE o.id = :id")
    , @NamedQuery(name = "OrdersEntity.findByOrderDate", query = "SELECT o FROM OrdersEntity o WHERE o.orderDate = :orderDate")
    , @NamedQuery(name = "OrdersEntity.findByShipmentDate", query = "SELECT o FROM OrdersEntity o WHERE o.shipmentDate = :shipmentDate")
    , @NamedQuery(name = "OrdersEntity.findByOrderNumber", query = "SELECT o FROM OrdersEntity o WHERE o.orderNumber = :orderNumber")
    , @NamedQuery(name = "OrdersEntity.findByStatus", query = "SELECT o FROM OrdersEntity o WHERE o.status = :status")})
public class OrdersEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "ORDER_DATE")
    @Temporal(TemporalType.DATE)
    private Date orderDate;
    @Column(name = "SHIPMENT_DATE")
    @Temporal(TemporalType.DATE)
    private Date shipmentDate;
    @Column(name = "ORDER_NUMBER")
    private Long orderNumber;
    @Basic(optional = false)
    @Column(name = "STATUS")
    private String status;
    @JoinColumn(name = "CUSTOMER_ID", referencedColumnName = "ID")
    @ManyToOne(optional = false)
    private CustomerEntity customerId;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "orderId")
    private Collection<OrderElemEntity> orderElemEntityCollection;

    public OrdersEntity(OrdersWrapper wr) {
        EntityManagerFactory factory;
        factory = Persistence.createEntityManagerFactory("OrdersPU");
        EntityManager em = factory.createEntityManager();
 //       em.getTransaction().begin();
        Query q = em.createNamedQuery("CustomerEntity.findById");
        q.setParameter("id", wr.getCustomer_id());
        CustomerEntity ce = (CustomerEntity) q.getSingleResult();

        this.customerId = ce;
     //   this.orderNumber = wr.getOrder_number();
        this.orderNumber = (long) (new Date().getTime()/1000);
        this.status = wr.getStatus();
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        try {
         //   this.orderDate = format.parse(wr.getOrder_date());
             this.orderDate = new Date();
            this.shipmentDate = format.parse(wr.getShipment_date());
        } catch (ParseException ex) {
            Logger.getLogger(OrdersEntity.class.getName()).log(Level.SEVERE, null, ex);
        }
      ////  em.close();
    }

    public OrdersEntity() {
    }
    
    public void Update(OrdersWrapper wr)        
    {
        this.id = wr.getId();
        this.orderNumber = wr.getOrder_number();
        this.status = wr.getStatus();
        
          DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        try {
            this.orderDate = format.parse(wr.getOrder_date());
            this.shipmentDate = format.parse(wr.getShipment_date());
        } catch (ParseException ex) {
            Logger.getLogger(OrdersEntity.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public OrdersEntity(Integer id) {
        this.id = id;
    }

    public OrdersEntity(Integer id, Date orderDate, String status) {
        this.id = id;
        this.orderDate = orderDate;
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Date getShipmentDate() {
        return shipmentDate;
    }

    public void setShipmentDate(Date shipmentDate) {
        this.shipmentDate = shipmentDate;
    }

    public Long getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(Long orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public CustomerEntity getCustomerId() {
        return customerId;
    }

    public void setCustomerId(CustomerEntity customerId) {
        this.customerId = customerId;
    }

    @XmlTransient
    public Collection<OrderElemEntity> getOrderElemEntityCollection() {
        return orderElemEntityCollection;
    }

    public void setOrderElemEntityCollection(Collection<OrderElemEntity> orderElemEntityCollection) {
        this.orderElemEntityCollection = orderElemEntityCollection;
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
        if (!(object instanceof OrdersEntity)) {
            return false;
        }
        OrdersEntity other = (OrdersEntity) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.orders.OrdersEntity[ id=" + id + " ]";
    }

    private Date format(Date date) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
