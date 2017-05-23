Ext.define('OrdersApp.model.Customer', {
    extend: 'Ext.data.Model',
    fields: [{name:'id',type:'int'}, 'name', 'code', 'address', 'discount'],
    proxy: {
        type: 'ajax',
        api: {
            read: '/Orders/FetchCustomerServlet',
            update: '/Orders/UpdateCustomerServlet',
            create: '/Orders/CreateCustomerServlet',
            destroy: '/Orders/DeleteCustomerServlet'
        },

        actionMethods: {
            read: 'POST'
        },
        reader: {
            root:'data',
            type: 'json'
        },
        writer: {
            root:'data',
            type: 'json'

        }
    }
});
