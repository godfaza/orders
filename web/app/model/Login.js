Ext.define('OrdersApp.model.Login', {
    extend: 'Ext.data.Model',
    fields: ['fullname', 'username','password','email','group','customer_id'],

    proxy: {
        type: 'ajax',
        url: '/Orders/FetchLoginDataServlet',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json'
          //  root: 'userdata'
        }
    }
});
