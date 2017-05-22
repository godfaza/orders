
Ext.define('OrdersApp.controller.Orders', {
    extend: 'Ext.app.Controller',
    models: ['Orders'],
    views: ['OrdersGrid'],
    stores: ['Orders'],
    requires: 'OrdersApp.view.Viewport',
    init: function () {
        console.log('Orders controller is initialized!');
        var me = this;
        me.control({'#delorder': {click: me.OnDelOrder}});
   //    me.control({'#delorder': {click: me.OnDelOrder}});
        //    me.control({'#cancelbtn': {click: me.OnCancelBtn}});


    },

    onLaunch: function () {

        var store = this.getOrdersStore();
        store.load();
        console.log('ORDERS STORE', store);

    },

    OnDelOrder: function () {

        var grid = Ext.ComponentQuery.query('#ogrid')[0];
        var selectedRecord = grid.getSelectionModel().getSelection()[0];

        console.log('ORDERS RECORD', selectedRecord);

    }


});

