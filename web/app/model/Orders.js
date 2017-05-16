Ext.define('OrdersApp.model.Orders', {
    extend: 'Ext.data.Model',
    fields: ['id','customer_id','order_date','shipment_date','order_number','status'],
    requires: 'OrdersApp.model.OrderElem',
   // HasMany: [
   //     {model: 'OrdersApp.model.OrderElem', primaryKey: 'id', foreignKey: 'order_id', getterName: 'getOrderElem', setterName: 'setOrderElem',associationKey:'phoneNumbers'}
   // ],
    
   
    
    proxy: {
        type: 'ajax',
        url: '/Orders/ReadOrdersServlet',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json'
          //  root: 'userdata'
        }
    }
});
