Ext.define('OrdersApp.store.Item', {
    extend: 'Ext.data.Store',
    requires: 'OrdersApp.model.Item',
    model: 'OrdersApp.model.Item',
   autoLoad: true

});