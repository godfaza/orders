// JavaScript Document
Ext.define('OrdersApp.view.MainToolbar', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.maintbpanel',
    itemId: 'maintbpanel',
    requires: [

    ],

    dockedItems: [{
            xtype: 'toolbar',
            docked: 'bottom',
            itemId: 'maintb',
            items: [{xtype: 'tbfill'}, {text: '', icon: 'resources/person-2x.png', itemId: 'usermenu', menu: [
                        {text: 'О заказчике', icon: 'resources/wrench-2x.png', itemId: 'usermenuinfo'},
                        {text: 'Выйти', icon: 'resources/account-logout-2x.png', itemId: 'usermenulogout'}
                    ]
                }]
        }],

    // title : 'All Users',
    initComponent: function () {



        this.callParent(arguments);
    }
});


