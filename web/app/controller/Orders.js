
Ext.define('OrdersApp.controller.Orders', {
    extend: 'Ext.app.Controller',
    models: ['Orders'],
    views: ['OrdersGrid'],
    stores: ['Orders'],
    requires: 'OrdersApp.view.Viewport',
    init: function () {
        console.log('Orders controller is initialized!');
        var me = this;
     //   me.control({'#submitbtn': {click: me.OnSubmitBtn}});
    //    me.control({'#cancelbtn': {click: me.OnCancelBtn}});


    },


    onLaunch: function () {
        
        var store = this.getOrdersStore();
        store.load();
        console.log('ORDERS STORE',store);
        var grid = getOrdersGrid();
        grid.getView().refresh();
        
    }




});

