Ext.define('OrdersApp.model.Customer', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'code', 'address', 'discount'],
    requires: 'OrdersApp.model.Orders',
    HasMany: [
        {model: 'OrdersApp.model.Orders', primaryKey: 'id', foreignKey: 'customer_id',name: 'orders', associationKey:'getOrders'}
    ],
    proxy: {
        type: 'ajax',
        api: {
            read: '/Orders/FetchCustomerServlet',
            update: '/Orders/UpdateCustomerServlet'
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
