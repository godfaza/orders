Ext.define('OrdersApp.model.Customer', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'code', 'address', 'discount'],
    requires: ['OrdersApp.model.Orders'],
    HasMany: [
        {model: 'OrdersApp.model.Orders', primaryKey: 'id', foreignKey: 'customer_id',name: 'ordersassoc', associationKey:'getOrders'}
    ],
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
            type: 'json'
        },
        writer: {
            type: 'json'

        }
    }
});
