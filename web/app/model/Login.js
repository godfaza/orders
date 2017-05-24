Ext.define('OrdersApp.model.Login', {
    extend: 'Ext.data.Model',
    fields: ['fullname', 'username','password','email','group','customer_id'],

    proxy: {
        type: 'ajax',
     //   url: '/Orders/FetchLoginDataServlet',
         api: {
            read: '/Orders/FetchLoginDataServlet',
            update: '/Orders/UpdateLoginServlet',
            create: '/Orders/CreateLoginServlet',
            destroy: '/Orders/DeleteLoginServlet'
        },
        actionMethods: {
            read: 'POST'
        },
        reader: {
            root: 'data',
            type: 'json'
          //  root: 'userdata'
        },
         writer: {
            root: 'data',
            type: 'json'
          //  root: 'userdata'
        }
        
    }
});
