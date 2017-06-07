
Ext.define('OrdersApp.controller.Customer', {
    extend: 'Ext.app.Controller',
    models: ['Login', 'Customer'],
    views: ['Viewport'],
    stores: ['Login', 'Customer'],
    refs: [

        {ref: 'chanel', selector: 'phpanel'},
        {ref: 'emchanel', selector: 'empanel'}

    ],
    requires: 'OrdersApp.view.Viewport',
    init: function () {

        console.log('Customer controller is initialized!');
        var btn = Ext.ComponentQuery.query('button');
        console.log(btn);
        var me = this;
        me.control({'#cinfo_close_btn': {click: me.OnCloseBtn}});
        me.control({'#cinfo_save_btn': {click: me.OnSaveBtn}});
        me.control({'#usermenuinfo': {click: me.onUserMenuInfo}});
        me.control({'#usermenulogout': {click: me.onUserMenuLogout}});


        this.application.on({
            customerinfoinit: this.OnCustomerInfoInit,
            scope: this
        });
        //  me.control({'#cancelbtn': {click: me.OnCancelBtn}});

    },

    OnCloseBtn: function () {
        var cinfow = Ext.ComponentQuery.query('#cinfo')[0];
        cinfow.close();
    },
    OnSaveBtn: function () {
        var form = Ext.ComponentQuery.query('#cinfo #cinfo_form')[0];
        var store = this.getCustomerStore();
        /*  store.load({
         params: {user: form.getValues().user},
         callback: function (records, operation, success) {
         if (success === true)
         console.log('customer store records: ', records);
         },
         scope: this
         });*/
        var record = store.getAt(0);
        form.updateRecord(record);
        console.log(record);
        store.sync({

            success: function ()
            {
                console.log("success!!");
            },
            failure: function ()
            {
                console.log("failed...");
            },
            scope: this
        });

        form.up().close();
    },

    onUserMenuInfo: function (option) {
        //   var CustomerInfo = Ext.ComponentQuery.query('#cinfo')[0];
        //  CustomerInfo.show()
        // console.log(option);
        Ext.widget('cinfo');
        this.application.fireEvent('customerinfoinit');
    },
    onUserMenuLogout: function (option) {


        Ext.Ajax.request({
            url: '/Orders/LogoutServlet',
            params: {
                user: current_user
            },
            success: function (response) {
                var text = response.responseText;
                console.log(text);
                var obj = Ext.decode(response.responseText);
                if (obj.success === true) {
                    var MainView = Ext.ComponentQuery.query('mainview')[0];
                    MainView.destroy();
                    window.location.reload();
                }


            },
            failure: function (response) {
            }
        });



        //     var MainView = Ext.ComponentQuery.query('mainview')[0];
        //     MainView.destroy();
        //     window.location.reload();
    },

    OnCustomerInfoInit: function () {
        var form = Ext.ComponentQuery.query('#cinfo #cinfo_form')[0];
        console.log('Customer info form initialized!!!');
        var CustomerStore = this.getCustomerStore();

        var record = CustomerStore.getAt(0);
        console.log('record info :::: ', record);
        form.loadRecord(record);
    },
    onLaunch: function () {


    }




});

