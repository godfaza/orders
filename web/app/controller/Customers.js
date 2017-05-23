
Ext.define('OrdersApp.controller.Customers', {
    extend: 'Ext.app.Controller',
    models: ['User', 'Login', 'Customer'],
    views: ['Viewport'],
    stores: ['Users', 'Login', 'Customers', 'Login'],
    requires: 'OrdersApp.store.Customers',

    init: function () {
        console.log('Customers controller is initialized!');
        var me = this;


        me.control({'#customers_item': {click: me.OnCustomersItem}});
        me.control({'#edcustomer': {click: me.OnEdCustomer}});
        //    me.control({'toolbar[itemId=maintb] button[itemId=delbtn]': {click: me.openModule2}});
        //    me.control({'#pcenter #newtab': {click: me.TabActivated}});
        //   me.control({'toolbar[itemId=maintb] button[itemId=usermenu] menuitem': {click: me.OnUserMenu}});

        this.application.on({
            loginstoreok: this.onLoginStoreReady,
            scope: this
        });

    },
    OnEdCustomer: function ()
    {
         var win = Ext.widget('editcustomerwindow');
           var form = win.child('#editcustomerwindow_form');
        console.log('Customer info form initialized!!!');
        var grid = Ext.ComponentQuery.query('#customersgrid')[0];
        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        var login_rec = this.getLoginStore().getAt(0);
        console.log('record info :::: ', selectedRecord);
        form.loadRecord(selectedRecord);
        form.loadRecord(login_rec);
        grid.store.sync();
        grid.getView().refresh();
    //    CustomersStore.reload();
    },

    OnCustomersItem: function ()
    {

    },

    onLoginStoreReady: function () {

        if (group === 'admin')
        {
            this.getCustomersStore().load();
            //    console.log(group);
            var tabs = Ext.ComponentQuery.query('#pcenter')[0];
            var cust = tabs.child('#customersgrid');
            cust.tab.show();

        }

    }



});