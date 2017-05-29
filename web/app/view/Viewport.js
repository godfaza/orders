Ext.define('OrdersApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    alias: 'widget.mainview',
    stores: 'Login',
    models: 'Login',

    requires: [
        'OrdersApp.view.MainPanel',
        'OrdersApp.view.MainToolbar',
        'OrdersApp.view.NewTab',
        'OrdersApp.view.CustomerInfo',
        'OrdersApp.view.Elements' 


                //   'OrdersApp.view.Emailpanel',
                //   'OrdersApp.view.Tabpanel'
    ],
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            items: [
                {
                    region: 'north',
                    xtype: 'maintbpanel',
                    border: false,
                    //  height: 50,
                    margins: '0 0 5 0'

                }
                , {
                    region: 'west',
                    collapsible: true,
                    title: 'Navigation',
                    width: 150
                          
                }, {
                    region: 'south',
                    title: 'South Panel',
                    collapsible: true,
                    html: 'Information goes here',
                    split: true,
                    height: 100,
                    minHeight: 100
                }, {
                    region: 'east',
                    title: 'East Panel',
                    collapsible: true,
                    split: true,
                    width: 150
                }, {
                    region: 'center',
                    xtype: 'pcenter',
                    //   hidden: true,
                    itemId: 'pcenter'
                }]

        });
        me.callParent(arguments);
    }

});



