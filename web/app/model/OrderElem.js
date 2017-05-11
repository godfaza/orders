Ext.define('OrdersApp.model.OrderElem', {
    extend: 'Ext.data.Model',
    fields: ['id', 'order_id', 'item_id', 'items_count', 'item_price'],
    requires: 'OrdersApp.model.Item',
   // associations: [{type: 'hasOne', model: 'OrdersApp.model.Item', getterName: 'getItem',primaryKey: 'id',associationKey:'Item', foreignKey: 'item_id'}],
associations: [{type: 'hasOne', model: 'OrdersApp.model.Item', getterName: 'getItem',setterName: 'setItem',associationKey: 'item',foreignKey: 'item_id'}],
    proxy: {
        type: 'ajax',
        api: {
            read: '/Orders/ReadOrderElemServlet',
            update: '/Orders/UpdateOrderElemServlet'
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
