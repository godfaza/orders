Ext.define('OrdersApp.store.OrderElem', {
    extend: 'Ext.data.Store',
    requires: 'OrdersApp.model.OrderElem',
    model: 'OrdersApp.model.OrderElem',
    autoLoad: false
 //   storeId: 'loginStore'

});