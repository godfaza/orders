
Ext.define('OrdersApp.controller.Main', {
    extend: 'Ext.app.Controller',
    models: ['Login', 'Customer'],
    views: ['Viewport'],
    stores: ['Login', 'Customer','Orders','Item'],
    requires: 'OrdersApp.store.Login',

    init: function () {
        console.log('Main controller is initialized!');
        var me = this;


        me.control({'#maintb #addbtn': {click: me.openModule}});
        me.control({'toolbar[itemId=maintb] button[itemId=delbtn]': {click: me.openModule2}});
        me.control({'#pcenter #newtab': {click: me.TabActivated}});
        //   me.control({'toolbar[itemId=maintb] button[itemId=usermenu] menuitem': {click: me.OnUserMenu}});

        this.application.on({
            loginstoreok: this.onLoginStoreReady,
            scope: this
        });

    },

    onLoginStoreReady: function ()
    {
        var me = this;
        var updateClock = function () {
            /*   var MainView = Ext.ComponentQuery.query('mainview')[0];
             MainView.destroy();
             window.location.reload();*/
          //  if (typeof me.getItemStore() === "function") 
         //    me.getItemStore().load();
            me.getOrdersStore().load();

            Ext.Ajax.request({
                url: '/Orders/CheckSessionStateServlet',
                params: {
                    id: 1
                },
                success: function (response) {
                    var text = response.responseText;
                    console.log(text);
                    var obj = Ext.decode(response.responseText);
                    if (obj.success === false) {
                        var MainView = Ext.ComponentQuery.query('mainview')[0];
                        MainView.destroy();
                        window.location.reload();
                    }


                },
                failure: function (response) {
                }
            });
        };

        var runner = new Ext.util.TaskRunner();
        var task = runner.start({
            run: updateClock,
            interval: 60000
        });

        //      Ext.getBody().mask('Entering....');
        console.log('Login Store is ready!!!');
        var LoginStore = this.getLoginStore();
        storedata = LoginStore.getAt(0).data.fullname;
        group = LoginStore.getAt(0).data.group;
        current_user = LoginStore.getAt(0).get('username');
        //  console.log('store in grid: ', LoginStore.getAt(0).data.user);
        ///******
        var CustomerStore = this.getCustomerStore();

        customer_id = LoginStore.getAt(0).data.customer_id;
        CustomerStore.load({
            params: {id: customer_id},
            callback: function (records, operation, success) {
                if (success === true)
                    console.log('customer records: ', records);


                //     {
                //       console.log(LoginStore); // should return the store-component
                //   console.log('store records: ',records); // should return an array of at least 1 item
                //      console.log(LoginStore.isLoaded()); // should be true
                //    console.log(LoginStore.getCount()); // should be > 0
                //    }
                //    console.log('Loaded store: ',LoginStore.getProxy().getReader().rawData); 
                this.application.fireEvent('customerstoreok');
            },
            scope: this
        });


        ///*****


        var usermenu = Ext.ComponentQuery.query('#usermenu')[0];
        usermenu.setText(storedata);
       Ext.ComponentQuery.query('#catradioname')[0].setValue(true);
       Ext.ComponentQuery.query('#orderradionumber')[0].setValue(true);
       
       
       

        if (group === 'admin')
        {
            btn = Ext.ComponentQuery.query('#additem')[0];
            btn.show();

  

            //  btn.setText("Changed!!!!!!!!!!!!!");
         //   btn = Ext.ComponentQuery.query('#edgood')[0];
             btn = Ext.ComponentQuery.query('#edorder')[0];
            btn.show();
            // btn.();
        }
        Ext.getBody().unmask();

    },

    onLaunch: function () {

        if (usr.role === 'user')
        {
            btn = Ext.ComponentQuery.query('#additem')[0];
            btn.hide();
            //  btn.setText("Changed!!!!!!!!!!!!!");
            btn = Ext.ComponentQuery.query('#edgood')[0];
            btn.hide();
            
            btn = Ext.ComponentQuery.query('#edorder')[0];
            btn.hide();
             


        }




        //    console.log('Loaded store in Main contr: ',LoginStore.getProxy().getReader().rawData); 
    },

    openModule: function (menuoption) {
        var me = this;
        var OContr;
        maintabs = Ext.ComponentQuery.query('#pcenter')[0];
        maintabs.add(Ext.create('OrdersApp.view.NewTab', {
            itemId: 'newtab',
            title: 'NewTab X'
        }));

        //   maintabs.show(); 


    },

    openModule2: function (menuoption)
    {
        console.log('Open Module2!!!!');


        // maintabs.hide(); 
    },

    OnUserMenu: function (menuoption)
    {
        console.log(menuoption);


        // maintabs.hide(); 
    },

    TabActivated: function (opt)
    {
        console.log('New Tab was clicked!');

    }



});