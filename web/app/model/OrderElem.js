Ext.define('OrdersApp.model.OrderElem', {
    extend: 'Ext.data.Model',
    fields: [{name: 'id', type: 'int'},
        'order_id',
        {name: 'item_id', type: 'int'},
        'items_count', 'item_price'],
    requires: 'OrdersApp.model.Item',
    // associations: [{type: 'hasOne', model: 'OrdersApp.model.Item', getterName: 'getItem',primaryKey: 'id',associationKey:'Item', foreignKey: 'item_id'}],
//associations: [{type: 'hasOne', model: 'OrdersApp.model.Item', getterName: 'getItem',setterName: 'setItem',foreignKey: 'item_id', autoLoad: true}],
    belongsTo: [
        {model: 'OrdersApp.model.Item', primaryKey: 'id', foreignKey: 'item_id', getterName: 'getItem', setterName: 'setItem'}
    ],
    proxy: {
        type: 'ajax',
        api: {
            read: '/Orders/ReadOrderElemServlet',
            update: '/Orders/UpdateOrderElemServlet',
            create: '/Orders/CreateOrderElemServlet'
        },

        actionMethods: {
            read: 'GET',
            write: 'POST'
        },
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json'

        }
    }
});
