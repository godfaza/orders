Ext.define('OrdersApp.store.Parent', {
    extend: 'Ext.data.Store',
    requires: 'OrdersApp.model.Parent',
    model: 'OrdersApp.model.Parent',
   autoLoad: true

});