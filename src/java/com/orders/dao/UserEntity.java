/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.dao;

import com.orders.misc.LoginWrapper;
import java.io.Serializable;
import javax.persistence.Basic;
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
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author root
 */
@Entity
@Table(name = "User")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "UserEntity.findAll", query = "SELECT u FROM UserEntity u")
    , @NamedQuery(name = "UserEntity.findById", query = "SELECT u FROM UserEntity u WHERE u.id = :id")
    , @NamedQuery(name = "UserEntity.findByFullname", query = "SELECT u FROM UserEntity u WHERE u.fullname = :fullname")
    , @NamedQuery(name = "UserEntity.findByUsername", query = "SELECT u FROM UserEntity u WHERE u.username = :username")
    , @NamedQuery(name = "UserEntity.findByPassword", query = "SELECT u FROM UserEntity u WHERE u.password = :password")
    , @NamedQuery(name = "UserEntity.findByEmail", query = "SELECT u FROM UserEntity u WHERE u.email = :email")})
public class UserEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "FULLNAME")
    private String fullname;
    @Basic(optional = false)
    @Column(name = "USERNAME")
    private String username;
    @Basic(optional = false)
    @Column(name = "PASSWORD")
    private String password;
    @Basic(optional = false)
    @Column(name = "EMAIL")
    private String email;
    @JoinColumn(name = "GROUP_ID", referencedColumnName = "ID")
    @ManyToOne(optional = false)
    private GroupsEntity groupId;
    @JoinColumn(name = "CUSTOMER_ID", referencedColumnName = "ID")
    @ManyToOne(optional = false)
    private CustomerEntity customerId;

    public UserEntity() {
    }
    
     public UserEntity(LoginWrapper wr) {
        this.id = wr.getId();
        this.fullname = wr.getFullname();
        this.username = wr.getUsername();
        this.password = wr.getPassword();
        this.email = wr.getEmail();
        
        EntityManagerFactory factory;
        factory = Persistence.createEntityManagerFactory("OrdersPU");
        EntityManager em = factory.createEntityManager();

        Query q = em.createNamedQuery("GroupsEntity.findByName");
        q.setParameter("name", wr.getGroup());
        GroupsEntity ge = (GroupsEntity) q.getSingleResult();
        
        this.groupId = ge;


        q = em.createNamedQuery("CustomerEntity.findById");
        q.setParameter("id", wr.getCustomer_id());
        CustomerEntity ce = (CustomerEntity) q.getSingleResult();
        em.close();
        this.customerId = ce;
        
    }

    public UserEntity(Integer id) {
        this.id = id;
    }

    public UserEntity(Integer id, String fullname, String username, String password, String email) {
        this.id = id;
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public GroupsEntity getGroupId() {
        return groupId;
    }

    public void setGroupId(GroupsEntity groupId) {
        this.groupId = groupId;
    }

    public CustomerEntity getCustomerId() {
        return customerId;
    }

    public void setCustomerId(CustomerEntity customerId) {
        this.customerId = customerId;
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
        if (!(object instanceof UserEntity)) {
            return false;
        }
        UserEntity other = (UserEntity) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.orders.UserEntity[ id=" + id + " ]";
    }
    
}
