
Ext.define('OrdersApp.controller.Orders', {
    extend: 'Ext.app.Controller',
    models: ['Orders', 'Customer'],
    views: ['OrdersGrid'],
    stores: ['Orders', 'Customer'],
    requires: 'OrdersApp.view.Viewport',
    init: function () {
        console.log('Orders controller is initialized!');
        var me = this;
        me.control({'#delorder': {click: me.OnDelOrder}});
        //    me.control({'#delorder': {click: me.OnDelOrder}});
        //    me.control({'#cancelbtn': {click: me.OnCancelBtn}});
        this.application.on({
            customerstoreok: this.onCustomerStoreReady,
            scope: this
        });
    },

    onCustomerStoreReady: function () {
        var store = this.getOrdersStore();
        if(group==='admin')
          store.load();
      else
      {
        var customer_id = this.getCustomerStore().getAt(0).get('id')
        store.load({params: {customer_id: customer_id}, scope: this});
    }
        console.log('ORDERS STORE', store);

    },
    onLaunch: function () {

        //   var store = this.getOrdersStore();
        //  store.load();

        //    store.load({params: {customer_id: this. },scope: this});
        //     console.log('ORDERS STORE', store);

    },

    OnDelOrder: function () {

        var grid = Ext.ComponentQuery.query('#ogrid')[0];
        var selectedRecord = grid.getSelectionModel().getSelection()[0];

        console.log('ORDERS RECORD', selectedRecord);

    }


});

