
Ext.define('OrdersApp.controller.Catalogue', {
    extend: 'Ext.app.Controller',
    models: ['Login', 'Customer', 'Item', 'OrderElem', 'Orders'],
    views: ['Viewport'],
    stores: ['Login', 'Customer', 'Item', 'Orders', 'Parent', 'Kid'],
    refs: [{
            ref: 'Catalogue',
            selector: '#catgrid'
        }],
    requires: ['OrdersApp.view.Viewport', 'OrdersApp.model.OrderElem', 'OrdersApp.model.Orders', 'OrdersApp.model.Customer', 'OrdersApp.store.Customer'],

    init: function () {
        var me = this;
        this.control({
            "#catgrid": {
                beforeactivate: this.OnCatalogueActivate
            }});
        me.control({'#addtocart': {click: me.OnAddToCart}});
        me.control({'#additem': {click: me.OnAddItem}});
        me.control({'#delitem': {click: me.OnDelItem}});
        me.control({'#editem': {click: me.OnEdItem}});
        me.control({'#catgrid': {itemmousedown: me.OnRowSelect}});
        me.control({'#additemwindow_close_btn': {click: me.OnCloseBtn}});
        me.control({'#additemwindow_save_btn': {click: me.OnSaveBtn}});
        me.control({'#edititemwindow_close_btn': {click: me.OnEdCloseBtn}});
        me.control({'#edititemwindow_save_btn': {click: me.OnEdSaveBtn}});
        me.control({'#checkout': {click: me.OnCheckout}});
        console.log('Catalogue controller is initialized!');



        this.application.on({
            catalogueinit: this.OnCatalogueInit,
            scope: this
        });
        //  me.control({'#cancelbtn': {click: me.OnCancelBtn}});

    },

    OnAddToCart: function () {
        var tabs = Ext.ComponentQuery.query('#pcenter')[0];
        var grid = Ext.ComponentQuery.query('#catgrid')[0];
        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        console.log('selected record', selectedRecord);
        if (selectedRecord != undefined) {
            if (tabs.down('#cart') == null)
            {
                tabs.add(Ext.create('OrdersApp.view.NewTab', {
                    itemId: 'cart',
                    title: 'Kорзина',
                    icon: 'resources/cart-2x.png',
                    requires: ['OrdersApp.model.Orders', 'OrdersApp.model.Customer', 'OrdersApp.store.Customer'],
                    dockedItems: [{
                            xtype: 'toolbar',
                            docked: 'bottom',
                            items: [{text: 'Удалить товар', itemId: 'delfromcart', icon: 'resources/delete-2x.png'},
                                {text: 'Оформить заказ', itemId: 'checkout', hidden: false, icon: 'resources/check-2x.png'}
                            ]
                        }],
                    items: [{xtype: 'grid',
                            itemId: 'cartgrid',
                            model: 'OrderElem',
                            store: 'OrderElem',

                            columns: [
                                {text: 'Товар', dataIndex: 'id', renderer: function (value, metaData, record, rowIdx, colIdx, store, view) {
                                        return record.getItem().get('name');
                                    }},
                                {text: 'Кол-во', dataIndex: 'items_count'},
                                {text: 'Цена', dataIndex: 'item_price'}
                            ]}]
                }));


                var el = new OrdersApp.model.OrderElem({'items_count': 1, 'order_id': 1});
                var customer = this.getCustomerStore().getAt(0);
                var base_price = selectedRecord.get('price');
                var price_disc = base_price - ((customer.get('discount') / 100.0) * base_price);

                el.set('item_price', price_disc);
                el.setItem(selectedRecord);
                // el.set('name', selectedRecord.get('name'));

                el.getItem(function (item, operation) {
                    console.log('Order element item is: ', item);
                }, this);
                console.log('Order element is: ', el);
                var grid = Ext.ComponentQuery.query('#cartgrid')[0];

                console.log('cart grid', grid.store);
                // grid.store.load();
                grid.store.add(el);
                //    grid.store.sync();

                grid.getView().refresh();


            } else
            {
                var cart = tabs.child('#cart');
                //   tabs.setActiveTab(cart);
                var grid = Ext.ComponentQuery.query('#cartgrid')[0];
                var customer = this.getCustomerStore().getAt(0);

//item in cart check 
//if item exits only increment the count
                var recordExists = false;
                grid.store.each(function (rec) {
                    if (rec.getItem().get('id') === selectedRecord.get('id'))
                    {
                        recordExists = true;
                        var cur_count = rec.get('items_count');
                        cur_count++;
                        rec.set('items_count', cur_count);

                        var base_price = selectedRecord.get('price');
                        var price_disc = base_price - ((customer.get('discount') / 100.0) * base_price);

                        price_disc = price_disc * cur_count;
                        rec.set('item_price', price_disc);

                      //  grid.getView().refresh();
                    }
                });
//item in cart check
                if (!recordExists)
                {
                    var el = new OrdersApp.model.OrderElem({'items_count': 1, 'order_id': 1});

                    var base_price = selectedRecord.get('price');
                    var price_disc = base_price - ((customer.get('discount') / 100.0) * base_price);

                    el.set('item_price', price_disc);

                    el.setItem(selectedRecord);
                    el.getItem(function (item, operation) {
                        console.log('Order element item is: ', item);
                    }, this);
                    console.log('Order element is: ', el);
                    var grid = Ext.ComponentQuery.query('#cartgrid')[0];

                    console.log('cart grid', grid.store);
                    // grid.store.load();
                    grid.store.add(el);
                //    grid.getView().refresh();
                }

            }
        }
    },

    OnCheckout: function () {
        var grid = Ext.ComponentQuery.query('#cartgrid')[0];
        if (grid.store.count())
        {
            alert('Все ок  -> Оформляем');

            var orders_store = this.getOrdersStore();
            var grid = Ext.ComponentQuery.query('#cartgrid')[0];
            var customer = this.getCustomerStore().getAt(0);

            var store = this.getParentStore();

            var order = new OrdersApp.model.Orders({'status': 'Принят', 'order_date': '19-05-2017 18:01', 'shipment_date': '21-05-2017 00:00', 'order_number': 20867});
            order.set('customer_id', customer.get('id'));


            orders_store.add(order);
            //     orders_store.sync();
            //   orders_store.reload();

            //Создаем заказ и добавляем id заказа каждому элементу
            var current_order_id;
            orders_store.sync({success: function (batch, opts) {
                    current_order_id = opts.operations.create[0].get('id');
                    console.log('CURRENT ORDER ID: ', current_order_id);
                    grid.store.each(function (rec) {
                        rec.set('order_id', current_order_id);
                        console.log('cart item: ', rec);
                    });
                    grid.store.sync();

                }});

            //  console.log('current order id: ', current_order_id);


            //       grid.store.removeAll();
         //   

            var tabs = Ext.ComponentQuery.query('#pcenter')[0];
            var cart = tabs.child('#cart');
            cart.close();

        } else
        {
            alert('Корзина пуста');
        }
    },

    OnCloseBtn: function () {
        var win = Ext.ComponentQuery.query('#additemwindow')[0];
        win.close();
    },
    OnSaveBtn: function () {
        var form = Ext.ComponentQuery.query('#additemwindow #additemwindow_form')[0];
        var grid = Ext.ComponentQuery.query('#catgrid')[0];
        //           var newid = grid.store.getTotalCount();

        var record = new OrdersApp.model.Item();
        form.updateRecord(record);
        grid.store.add(record);
        //  


        //   grid.getSelectionModel().getSelection()[0];
        grid.store.sync();
        grid.getView().refresh();
        form.up().close();

        /*  store.load({
         params: {user: form.getValues().user},
         callback: function (records, operation, success) {
         if (success === true)
         console.log('customer store records: ', records);
         },
         scope: this
         });*/
        /*  var store =  grid.getStore();
         var record = store.add({id:'',
         name:'test',
         code:'xxxx',
         price:'0.5',
         category:'ware'                    
         });
         form.updateRecord(record);*/
        console.log('form created record ::::: ');
        /*   store.sync({
         
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
         
         form.up().close();*/
    },

    OnEdCloseBtn: function () {
        var win = Ext.ComponentQuery.query('#edititemwindow')[0];
        win.close();
    },
    OnEdSaveBtn: function () {
        var form = Ext.ComponentQuery.query('#edititemwindow #edititemwindow_form')[0];
        var grid = Ext.ComponentQuery.query('#catgrid')[0];

        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        form.updateRecord(selectedRecord);
        grid.store.sync();
        grid.getView().refresh();
        form.up().close();
    },
    OnAddItem: function ()
    {
        /*  
         var grid = Ext.ComponentQuery.query('#catgrid')[0];
         var selectedRecord = grid.getSelectionModel().getSelection()[0];
         var row = grid.store.indexOf(selectedRecord);
         console.log('ADD ITEM:::: ',selectedRecord);
         
         
         */
        //var form = Ext.ComponentQuery.query('#additemwindow #additemwindow_form')[0];
        var win = Ext.widget('additemwindow');
        var form = win.down('#additemwindow_form');

        var record = new OrdersApp.model.Item({name: 'ItemXYZ',
            code: '00-1234-XX00',
            price: 1,
            category: 'unknown'
        });
        form.loadRecord(record);
        console.log('itemid form initialized!!!::: ');
        //  form.loadRecord(selectedRecord);
        // form.show();
        //    var store = this.getItemStore();
        //     cat.loadData(store);
    },

    OnDelItem: function ()
    {

        var grid = Ext.ComponentQuery.query('#catgrid')[0];
        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        var row = grid.store.indexOf(selectedRecord);

        grid.store.remove(selectedRecord);
        grid.store.sync();
        console.log('Del ITEM', row);
        //    var store = this.getItemStore();
        //     cat.loadData(store);
    },

    OnEdItem: function ()
    {

        var grid = Ext.ComponentQuery.query('#catgrid')[0];
        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        var win = Ext.widget('edititemwindow');
        var form = win.down('#edititemwindow_form');
        form.loadRecord(selectedRecord);

    },
    OnRowSelect: function (par, record, item, index, e, eOpts)
    {
        console.log('ROW SELECT', record);
        //    var store = this.getItemStore();
        //     cat.loadData(store);
    },
    OnCatalogueActivate: function (cat, opts)
    {
        console.log('CAT ACTIVATED');
        //    var store = this.getItemStore();
        //     cat.loadData(store);
    },
    OnCatalogueInit: function () {
        //      var cat = Ext.ComponentQuery.query('#catalogue')[0];
        //      // console.log('Customer info form initialized!!!');
        //       var store = this.getItemStore();
        //      store.load();
        // var record = CustomerStore.getAt(0);
        //   form.loadRecord(record);
    },

    /*,
     
     OnCloseBtn: function () {
     var cinfow = Ext.ComponentQuery.query('#cinfo')[0];
     cinfow.close();
     },
     OnSaveBtn: function () {
     var form = Ext.ComponentQuery.query('#cinfo #cinfo_form')[0];
     var store = this.getCustomerStore();
     
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
     var MainView = Ext.ComponentQuery.query('mainview')[0];
     MainView.destroy();
     window.location.reload();
     },
     
     OnCustomerInfoInit: function () {
     var form = Ext.ComponentQuery.query('#cinfo #cinfo_form')[0];
     console.log('Customer info form initialized!!!');
     var CustomerStore = this.getCustomerStore();
     var record = CustomerStore.getAt(0);
     form.loadRecord(record);
     },*/
    onLaunch: function () {
// var store = this.getItemStore();
        //      store.load();
        /* console.log('on launch catalogue');
         var cat = Ext.ComponentQuery.query('#catalogue')[0];
         
         //   var record = CustomerStore.getAt(0);
         cat.loadData(store);*/

    }




});

