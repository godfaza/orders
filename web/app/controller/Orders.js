
Ext.define('OrdersApp.controller.Orders', {
    extend: 'Ext.app.Controller',
    models: ['Orders', 'Customer', 'OrderElemExtended', 'Item'],
    views: ['OrdersGrid'],
    stores: ['Orders', 'Customer', 'Customers', 'OrderElemExtended', 'Item'],
    requires: 'OrdersApp.view.Viewport',
    init: function () {
        console.log('Orders controller is initialized!');
        var me = this;
        me.control({'#delorder': {click: me.OnDelOrder}});
        me.control({'#edorder': {click: me.OnEdOrder}});
        me.control({"#statuscombo": {select: me.onStatusComboSel}
        });

        me.control({'#editorderwindow_save_btn': {click: me.OnSaveBtn}});
        me.control({'#editorderwindow_close_btn': {click: me.OnCloseBtn}});
        me.control({'#delelement': {click: me.OnDelOrderElem}});
        me.control({'#ordersearchapply': {click: me.OnSearchApply}});
        me.control({'#ordersearchreset': {click: me.OnSearchReset}});
        //    me.control({'#delorder': {click: me.OnDelOrder}});
        //    me.control({'#cancelbtn': {click: me.OnCancelBtn}});
        this.application.on({
            customerstoreok: this.onCustomerStoreReady,
            scope: this
        });
    },

    OnSearchApply: function () {
        this.getOrdersStore().clearFilter(true);
        var textfield = Ext.ComponentQuery.query('#ordersearch')[0];
        var text = textfield.getRawValue();
        var s = Ext.ComponentQuery.query('#startorderdate')[0];
        var e = Ext.ComponentQuery.query('#endorderdate')[0];
        var start = s.getValue();
        var end = e.getValue();
        console.log(start);
        console.log(end);
        //  this.getItemStore().filter('name',text);



        if (Ext.ComponentQuery.query('#orderradionumber')[0].getValue() === true)
            this.getOrdersStore().filter('order_number', text);
        //    if (Ext.ComponentQuery.query('#orderradiodate')[0].getValue() === true)
        //     {

        //  this.getOrdersStore().filter('order_date', date);
        if (Ext.ComponentQuery.query('#orderradiostatus')[0].getValue() === true)
            this.getOrdersStore().filter('status', text);

        if (start !== null && end !== null)
            this.getOrdersStore().filter(
                    Ext.create('Ext.util.Filter', {filterFn: function (record) {
                            console.log(record);
                            //  alert(record.data.datetime);
                            return (record.get('order_date') >= start && record.get('order_date') <= end);
                        }
                    })
                    );

    },

    OnSearchReset: function () {

        this.getOrdersStore().clearFilter(true);
        var store = this.getOrdersStore();
        if (group === 'admin')
            store.load();
        else
        {
            var customer_id = this.getCustomerStore().getAt(0).get('id');
            store.load({params: {customer_id: customer_id}, scope: this});
        }
    },

    OnDelOrderElem: function ()
    {
        var grid = Ext.ComponentQuery.query('#elementsgrid')[0];
        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        this.getOrderElemExtendedStore().remove(selectedRecord);
        this.getOrderElemExtendedStore().sync();
        if (this.getOrderElemExtendedStore().count() === 0)
        {
            var ogrid = Ext.ComponentQuery.query('#ogrid')[0];
            var current_order = ogrid.getSelectionModel().getSelection()[0];
            alert('В заказе нет ни одного товара - удаляем ');
            ogrid.store.remove(current_order);
            ogrid.store.sync();
            var win = Ext.ComponentQuery.query('#editorderwindow')[0];
            win.close();
        }
    },

    OnSaveBtn: function ()
    {
        var win = Ext.ComponentQuery.query('editorderwindow')[0];
        var form = win.child('#editorderwindow_form');
        var grid = Ext.ComponentQuery.query('#ogrid')[0];
        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        form.updateRecord(selectedRecord);
        this.getOrdersStore().sync();
    },

    OnCloseBtn: function ()
    {
        var win = Ext.ComponentQuery.query('#editorderwindow')[0];
        win.close();
    },

    onStatusComboSel: function (combo, records, eOpts)
    {
        var win = Ext.ComponentQuery.query('editorderwindow')[0];
        var form = win.child('#editorderwindow_form').getForm();
        //  var order = new OrdersApp.model.Orders();
        console.log('STATUS COMBO', records[0].get('text'));
        var rec = records[0].get('text');
        //  form.updateRecord(order);
        //  order.set('status', rec);
        form.setValues({status: rec});

        // console.log('STATUS COMBO',cellField);
    },

    OnEdOrder: function ()
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

        win.child('label').setText('Заказчик:  ' + customer_rec.get('name'));
        console.log('record info :::: ', selectedRecord);

        if (selectedRecord.get('status') === 'Отгружен')
        {
            console.log('disabling form');
            form.query('.field').forEach(function (c) {
                c.setDisabled(true);
            });
            Ext.ComponentQuery.query('#editorderwindow_save_btn')[0].setDisabled(true);
            Ext.ComponentQuery.query('#elements')[0].setDisabled(true);
        }
        form.loadRecord(selectedRecord);



        //  this.getItemStore().load();
        var egrid = Ext.ComponentQuery.query('#elementsgrid')[0];
        egrid.store.load({
            params: {order_id: selectedRecord.get('id')}
        });
        egrid.getView().refresh();


    },

    onCustomerStoreReady: function () {
        var store = this.getOrdersStore();
        if (group === 'admin')
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


        if (group === 'user' && (selectedRecord.get('status') === 'Отгружен'))
        {
            alert('Заказ уже отгружен - удалить невозможно!');
        } else
        {
            var msg = 'Заказ #: ' + selectedRecord.get('order_number') + ' удален';
            grid.store.remove(selectedRecord);
            grid.store.sync();
            var sb = Ext.ComponentQuery.query('#mystatus')[0];

            sb.setStatus({
                text: msg,
                //  iconCls: 'ok-icon',
                clear: true
            });
        }

    }


});

