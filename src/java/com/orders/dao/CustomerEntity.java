/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.dao;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import com.owlike.genson.annotation.JsonIgnore;
import org.eclipse.persistence.annotations.PrivateOwned;
/**
 *
 * @author root
 */
@Entity
@Table(name = "Customer")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "CustomerEntity.findAll", query = "SELECT c FROM CustomerEntity c")
    , @NamedQuery(name = "CustomerEntity.findById", query = "SELECT c FROM CustomerEntity c WHERE c.id = :id")
    , @NamedQuery(name = "CustomerEntity.findByName", query = "SELECT c FROM CustomerEntity c WHERE c.name = :name")
    , @NamedQuery(name = "CustomerEntity.findByCode", query = "SELECT c FROM CustomerEntity c WHERE c.code = :code")
    , @NamedQuery(name = "CustomerEntity.findByAddress", query = "SELECT c FROM CustomerEntity c WHERE c.address = :address")
    , @NamedQuery(name = "CustomerEntity.findByDiscount", query = "SELECT c FROM CustomerEntity c WHERE c.discount = :discount")})
public class CustomerEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "NAME")
    private String name;
    @Basic(optional = false)
    @Column(name = "CODE")
    private String code;
    @Basic(optional = false)
    @Column(name = "ADDRESS")
    private String address;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "DISCOUNT")
    private BigDecimal discount;
  @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customerId")
    private Collection<OrdersEntity> ordersEntityCollection;
@JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customerId",orphanRemoval = true)
    private Collection<UserEntity> userEntityCollection;

    public CustomerEntity() {
    }

    public CustomerEntity(Integer id) {
        this.id = id;
    }

    public CustomerEntity(Integer id, String name, String code, String address) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.address = address;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    @JsonIgnore
    @XmlTransient
    public Collection<OrdersEntity> getOrdersEntityCollection() {
        return ordersEntityCollection;
    }

    @JsonIgnore
    public void setOrdersEntityCollection(Collection<OrdersEntity> ordersEntityCollection) {
        this.ordersEntityCollection = ordersEntityCollection;
    }

    @JsonIgnore
    @XmlTransient
    public Collection<UserEntity> getUserEntityCollection() {
        return userEntityCollection;
    }

    @JsonIgnore
    public void setUserEntityCollection(Collection<UserEntity> userEntityCollection) {
        this.userEntityCollection = userEntityCollection;
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
        if (!(object instanceof CustomerEntity)) {
            return false;
        }
        CustomerEntity other = (CustomerEntity) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.orders.CustomerEntity[ id=" + id + " ]";
    }
    
}
