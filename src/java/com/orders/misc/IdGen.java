/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.orders.misc;

import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

/**
 *
 * @author root
 */
public class IdGen {

    public String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String GenCustomerId() {
        int year = Calendar.getInstance().get(Calendar.YEAR);
        long num = (long) (new Date().getTime() / 1000);
        String y = Long.toString(num);
        String x = new StringBuilder(y).reverse().toString();
        x = x.substring(0, 4)+ "-" + Integer.toString(year);
        
        return x;
    }

    public String GenItemId(String name) {
        long num = (long) (new Date().getTime() / 1000);
        String y = Long.toString(num);
        String x = new StringBuilder(y).reverse().toString();
        x = x.substring(0, 2) + "-" + x.substring(2, x.length());
        x = x.substring(0, 7) + "-" + (name.substring(0, 2)).toUpperCase() + x.substring(9, x.length());

        return x;
    }

}
