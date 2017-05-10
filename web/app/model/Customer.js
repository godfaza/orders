Ext.define('OrdersApp.model.Customer', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','code','address','discount'],

    proxy: {
        type: 'ajax',
        api: {
            read:      '/Orders/FetchCustomerServlet',
            update:  '/Orders/UpdateCustomerServlet'
        },

        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json'
           },
        writer: {
            type: 'json'

        }
    }
});
