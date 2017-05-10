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
            items: [{text: 'Старт', itemId: 'mainmenu', icon: 'resources/menu-2x.png', menu: [
                        {text: 'Заказчики', icon: 'resources/people-2x.png', itemId: 'customers_item', hidden: true, handler: function () {
                                console.log('Заказчики');
                            }},
                        {text: 'Заказы', icon: 'resources/list-rich-2x.png', handler: function () {
                                console.log('Заказы');
                            }}
                    ]},{xtype: 'tbfill'}, {text: '', icon: 'resources/person-2x.png', itemId: 'usermenu', menu: [
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


