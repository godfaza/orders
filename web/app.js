// JavaScript Document
Ext.Loader.setConfig({enabled: true});

var usr;


Ext.application({
    name		 : 'OrdersApp',
	appFolder	 : 'app',
	controllers  : ['Main','Login','Customer','Catalogue','Orders','Customers'],
	models		 : ['Login','OrderElem','Orders','Parent','Kid'],
	stores		 : ['Login','OrderElem','Orders','Parent','Kid','Customers','Logins'],
        views: 'Login' ,
        requires: 'OrdersApp.Roles',
 //   autoCreateViewport: true,
    launch: function(){

           // Ext.create('OrdersApp.view.Login'); 
           var CurrentUser = Ext.create('OrdersApp.model.Login');
           var group;

             usr = Ext.create('OrdersApp.Roles',{
                role:'man',
                descr: '!'
            });
            
            var man = Ext.create('OrdersApp.Roles',
            {
                role:'user',
                descr: '!'
            }
        );
        var me = this;
        me.splashscreen.next().fadeOut(
        {
            duration: 2000,
            remove:true,
            listeners: 
            {
                    afteranimate: function(el, startTime, eOpts )
                    {
                        Ext.widget('login-dialog'); 
                    }
            }
    });


    },
    
    init: function ()
    {
        var me = this; 
        me.splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');
    }
    
    
});
