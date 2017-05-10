/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.dao;

import com.owlike.genson.annotation.JsonIgnore;
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

/**
 *
 * @author root
 */
@Entity
@Table(name = "Item")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ItemEntity.findAll", query = "SELECT i FROM ItemEntity i")
    , @NamedQuery(name = "ItemEntity.findById", query = "SELECT i FROM ItemEntity i WHERE i.id = :id")
    , @NamedQuery(name = "ItemEntity.findByCode", query = "SELECT i FROM ItemEntity i WHERE i.code = :code")
    , @NamedQuery(name = "ItemEntity.findByName", query = "SELECT i FROM ItemEntity i WHERE i.name = :name")
    , @NamedQuery(name = "ItemEntity.findByPrice", query = "SELECT i FROM ItemEntity i WHERE i.price = :price")
    , @NamedQuery(name = "ItemEntity.findByCategory", query = "SELECT i FROM ItemEntity i WHERE i.category = :category")})
public class ItemEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "CODE")
    private String code;
    @Basic(optional = false)
    @Column(name = "NAME")
    private String name;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "PRICE")
    private BigDecimal price;
    @Basic(optional = false)
    @Column(name = "CATEGORY")
    private String category;
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "itemId")
    @JsonIgnore
    private Collection<OrderElemEntity> orderElemEntityCollection;

    public ItemEntity() {
    }

    public ItemEntity(Integer id) {
        this.id = id;
    }

    public ItemEntity(Integer id, String code, String name, String category) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.category = category;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
@JsonIgnore
    @XmlTransient
    public Collection<OrderElemEntity> getOrderElemEntityCollection() {
        return orderElemEntityCollection;
    }
@JsonIgnore
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
        if (!(object instanceof ItemEntity)) {
            return false;
        }
        ItemEntity other = (ItemEntity) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.orders.ItemEntity[ id=" + id + " ]";
    }
    
}
