Ext.define('OrdersApp.model.OrderElemExtended', {
    extend: 'Ext.data.Model',
    fields: ['id', 'order_id','item_name','items_count', 'item_price'],

    proxy: {
        type: 'ajax',
        api: {
            read: '/Orders/ReadOrderElemServlet',
            update: '/Orders/UpdateOrderElemServlet',
            destroy: '/Orders/DeleteOrderElemServlet'
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



