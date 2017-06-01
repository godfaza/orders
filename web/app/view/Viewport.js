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
        'OrdersApp.view.Elements',
        'OrdersApp.view.SearchBar',
        'OrdersApp.view.StatusBar'


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
                    region: 'south',
                    title: 'Состояние',
                    xtype: 'statuspanel',
                    //   hidden: true,
                    //     itemId: 'pcenter'
                    //  collapsible: true,
                    //    html: 'Information goes here',
                    split: true,
                    height: 30,
                    minHeight: 30
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



