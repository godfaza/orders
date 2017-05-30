Ext.define('OrdersApp.store.OrderElemExtended', {
    extend: 'Ext.data.Store',
    requires: 'OrdersApp.model.OrderElemExtended',
    model: 'OrdersApp.model.OrderElemExtended',
    autoLoad: false
 //   storeId: 'loginStore'

});