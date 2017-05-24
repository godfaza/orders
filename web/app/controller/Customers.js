
Ext.define('OrdersApp.controller.Customers', {
    extend: 'Ext.app.Controller',
    models: ['Login', 'Customer'],
    views: ['Viewport'],
    stores: ['Login', 'Customers', 'Logins'],
    requires: 'OrdersApp.store.Customers',

    init: function () {
        console.log('Customers controller is initialized!');
        var me = this;


        me.control({'#customers_item': {click: me.OnCustomersItem}});
        me.control({'#edcustomer': {click: me.OnEdCustomer}});
        me.control({'#addcustomer': {click: me.OnAddCustomer}});
        me.control({'#delcustomer': {click: me.OnDelCustomer}});
        me.control({'#editcustomerwindow_save_btn': {click: me.OnEdCustomerSave}});
        me.control({'#addcustomerwindow_save_btn': {click: me.OnAddCustomerSave}});
        //    me.control({'toolbar[itemId=maintb] button[itemId=delbtn]': {click: me.openModule2}});
        //    me.control({'#pcenter #newtab': {click: me.TabActivated}});
        //   me.control({'toolbar[itemId=maintb] button[itemId=usermenu] menuitem': {click: me.OnUserMenu}});

        this.application.on({
            loginstoreok: this.onLoginStoreReady,
            scope: this
        });

    },

    OnDelCustomer: function ()
    {
        var grid = Ext.ComponentQuery.query('#customersgrid')[0];
        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        this.getCustomersStore().remove(selectedRecord);
        this.getCustomersStore().sync();
        //    CustomersStore.reload();
    },

    OnAddCustomer: function ()
    {
        var win = Ext.widget('addcustomerwindow');

        //    CustomersStore.reload();
    },
    OnEdCustomer: function ()
    {
        var win = Ext.widget('editcustomerwindow');
        var form = win.child('#editcustomerwindow_form');
        console.log('Customer info form initialized!!!');
        var grid = Ext.ComponentQuery.query('#customersgrid')[0];
        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        var login_rec;
        this.getLoginsStore().each(function (rec) {
            if (rec.get('customer_id') === selectedRecord.get('id'))
            {
                login_rec = rec;
            }
        });
        console.log('record info :::: ', selectedRecord);
        form.loadRecord(selectedRecord);
        form.loadRecord(login_rec);
        grid.store.sync();
        grid.getView().refresh();
        //    CustomersStore.reload();
    },

    OnEdCustomerSave: function ()
    {
        var win = Ext.ComponentQuery.query('#editcustomerwindow')[0];
        var form = win.child('#editcustomerwindow_form');
        var grid = Ext.ComponentQuery.query('#customersgrid')[0];
        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        var login_rec;
        this.getLoginsStore().each(function (rec) {
            if (rec.get('customer_id') === selectedRecord.get('id'))
            {
                login_rec = rec;
            }
        });
        form.updateRecord(selectedRecord);
        this.getCustomersStore().sync();
        form.updateRecord(login_rec);
        this.getLoginsStore().sync();
        form.up().close();
    },

    OnAddCustomerSave: function ()
    {
        var win = Ext.ComponentQuery.query('#addcustomerwindow')[0];
        var form = win.child('#addcustomerwindow_customer_form');
        var form2 = win.child('#addcustomerwindow_login_form');
        var grid = Ext.ComponentQuery.query('#customersgrid')[0];
        var cust_rec = new OrdersApp.model.Customer();
        //   var login_rec = new OrdersApp.model.Login({'group':'user'});
        //  console.log('LOGIN REC',login_rec);
        var LoginsStore = this.getLoginsStore();

        form.updateRecord(cust_rec);
        var login_rec = new OrdersApp.model.Login({'group': 'user'});
        form2.updateRecord(login_rec);

        this.getCustomersStore().add(cust_rec);
        this.getCustomersStore().sync({success: function (batch, opts) {
                console.log(opts);
                var current_customer_id = opts.operations.create[0].get('id');
                console.log(current_customer_id);
                login_rec.set('customer_id', current_customer_id);
                LoginsStore.add(login_rec);
                LoginsStore.sync();

            }});


        form.up().close();
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

    },
    onLaunch: function () {
        console.log('LAUNCHING');
        this.getLoginsStore().load();
        this.getCustomersStore().load();
    }



});