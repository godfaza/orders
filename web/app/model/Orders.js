Ext.define('OrdersApp.model.Orders', {
    extend: 'Ext.data.Model',
    fields: ['id','customer_id', {name: 'order_date',type:'date',dateFormat:'d-m-Y H:i'}, {name:'shipment_date',type:'date',dateFormat:'d-m-Y H:i'}, 'order_number', 'status'],

    proxy: {
        type: 'ajax',
        api: {
            read: '/Orders/ReadOrdersServlet',
            update: '/Orders/UpdateOrdersServlet',
            create: '/Orders/CreateOrdersServlet',
            destroy: '/Orders/DeleteOrdersServlet'
        },

        actionMethods: {
            read: 'GET',
            write: 'POST'
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
