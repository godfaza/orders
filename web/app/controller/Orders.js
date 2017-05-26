
Ext.define('OrdersApp.controller.Orders', {
    extend: 'Ext.app.Controller',
    models: ['Orders', 'Customer'],
    views: ['OrdersGrid'],
    stores: ['Orders', 'Customer','Customers'],
    requires: 'OrdersApp.view.Viewport',
    init: function () {
        console.log('Orders controller is initialized!');
        var me = this;
        me.control({'#delorder': {click: me.OnDelOrder}});
        me.control({'#edorder': {click: me.OnEdOrder}});
        me.control({"#statuscombo": {select: me.onStatusComboSel}
  });
        //    me.control({'#delorder': {click: me.OnDelOrder}});
        //    me.control({'#cancelbtn': {click: me.OnCancelBtn}});
        this.application.on({
            customerstoreok: this.onCustomerStoreReady,
            scope: this
        });
    },
    
    onStatusComboSel : function()
    {
      var win = Ext.widget('editorderwindow');
        var form = win.child('#editorderwindow_form');
        var order = new OrdersApp.model.Orders();
        form.updateRecord(order);
         order.set('status','processing');   
         form.loadRecord(order);
        // console.log('STATUS COMBO',cellField);
    },
    
    OnEdOrder: function()
    {
         var win = Ext.widget('editorderwindow');
        var form = win.child('#editorderwindow_form');
      //  console.log('Customer info form initialized!!!');
        var grid = Ext.ComponentQuery.query('#ogrid')[0];
        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        var customer_rec;
        this.getCustomersStore().each(function (rec) {
            if (rec.get('id') === selectedRecord.get('customer_id'))
            {
                customer_rec = rec;
            }
        });
        console.log('record info :::: ', selectedRecord);
        form.loadRecord(selectedRecord);
        form.loadRecord(customer_rec);

    },

    onCustomerStoreReady: function () {
        var store = this.getOrdersStore();
        if(group==='admin')
          store.load();
      else
      {
        var customer_id = this.getCustomerStore().getAt(0).get('id');
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

