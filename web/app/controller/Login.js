
Ext.define('OrdersApp.controller.Login', {
    extend: 'Ext.app.Controller',
    models: ['Login', 'Customer'],
    views: [],
    stores: ['Login', 'Customer'],
    requires: 'OrdersApp.view.Viewport',
    init: function () {
        console.log('Login controller is initialized!');
        var me = this;
        me.control({'#submitbtn': {click: me.OnSubmitBtn}});
        me.control({'#cancelbtn': {click: me.OnCancelBtn}});

        /*   
         
         
         me.control({'#maintb #addbtn': {click : me.openModule}});
         me.control({'toolbar[itemId=maintb] button[itemId=delbtn]': {click : me.openModule2}});
         me.control({'#pcenter #newtab': {click : me.TabActivated}});
         
         */

    },

    OnSubmitBtn: function () {
        console.log('Submit button was clicked!!!!');

        var me = this,
                form = Ext.ComponentQuery.query('#login-dialog #authform')[0];
        form.submit({
            clientValidation: true,
            params: form.getValues(),
            url: '/Orders/LoginServlet',
            scope: me,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'
        });
        /*      
         var obj = new Object();
         obj.user = form.getValues().user;
         obj.password = form.getValues().password;
         obj.role="";
         obj.success=false;
         
         var jsonData = Ext.JSON.encode(obj);
         Ext.Ajax.request({
         url: '/Orders/LoginServlet',
         method : 'POST',
         headers : {
         'Content-Type' : 'application/json'
         },
         params : jsonData,
         success: 'onLoginSuccess',
         failure: 'onLoginFailure'
         });   
         */

        //   maintabs.show(); 


    },

    onLoginSuccess: function (form, action) {

        console.log('Success!');
        // var o= {};
        //  var o = Ext.decode(action.response.responseText);
        //   Ext.Msg.show(o);   
        /*
         var obj = new Object();
         obj.user = form.getValues().user;
         obj.password = form.getValues().password;
         obj.role="test";
         obj.success=false;
         
         var jsonData = Ext.JSON.encode(obj);
         Ext.Ajax.request({
         url: '/Orders/LoginServlet',
         method : 'POST',
         headers : {
         'Content-Type' : 'application/json'
         },
         params : jsonData
         //  success: 'onLoginSuccess',
         //   failure: 'onLoginFailure'
         }); */

        var LoginStore = this.getLoginStore();
        LoginStore.load({
            params: {user: form.getValues().user},
            callback: function (records, operation, success) {
                if (success === true)
                    console.log('store records: ', records);


                //     {
                //       console.log(LoginStore); // should return the store-component
                //   console.log('store records: ',records); // should return an array of at least 1 item
                //      console.log(LoginStore.isLoaded()); // should be true
                //    console.log(LoginStore.getCount()); // should be > 0
                //    }
                //    console.log('Loaded store: ',LoginStore.getProxy().getReader().rawData); 
                this.application.fireEvent('loginstoreok');
            },
            scope: this
        });




        //  var str = Ext.StoreManager.get('Login');
        //   console.log('Loaded store: ',LoginStore.getProxy().getReader().rawData);


        var loginWindow = Ext.ComponentQuery.query('#login-dialog')[0];
        loginWindow.close();
        //  Ext.getBody().unmask();
        Ext.create('OrdersApp.view.Viewport');


    },

    onLoginFailure: function (form, action) {
        console.log('Failure!');

    },

    OnCancelBtn: function () {
        console.log('Cancel button was clicked!!!!');
        var authform = Ext.ComponentQuery.query('#login-dialog #authform')[0];
        authform.getForm().reset();
        //   maintabs.show(); 


    },

    onLaunch: function () {

        /*      if(usr.role ==='user')
         {
         btn = Ext.ComponentQuery.query('#addgood')[0];
         btn.hide();
         btn = Ext.ComponentQuery.query('#edgood')[0];
         btn.hide(); 
         }*/
    }




});

