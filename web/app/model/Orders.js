Ext.define('OrdersApp.model.Orders', {
    extend: 'Ext.data.Model',
    fields: [{name: 'id', type: 'int'}, {name: 'customer_id', type: 'int'}, 'order_date', 'shipment_date', 'order_number', 'status'],
    requires: 'OrdersApp.model.OrderElem',
    belongsTo: [
        {model: 'OrdersApp.model.Customer', primaryKey: 'id', foreignKey: 'customer_id'}
    ],
    // HasMany: [
    //     {model: 'OrdersApp.model.OrderElem', primaryKey: 'id', foreignKey: 'order_id', getterName: 'getOrderElem', setterName: 'setOrderElem',associationKey:'phoneNumbers'}
    // ],

    proxy: {
        type: 'memory'
    }


    /*   proxy: {
     type: 'ajax',
     url: '/Orders/ReadOrdersServlet',
     actionMethods: {
     read: 'POST'
     },
     reader: {
     type: 'json'
     //  root: 'userdata'
     }
     }*/
});
