Ext.define('OrdersApp.view.OrdersGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ogrid',
    title: 'Заказы',
    models: 'Orders',
    store: 'Orders',

    dockedItems: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{text: 'Редактировать заказ', itemId: 'edorder', hidden: true}, {text: 'Удалить заказ', itemId: 'delorder'}]
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            layout: 'hbox',

            items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Поиск',
                    name: 'search',
                    region: 'north',
                    itemId: 'ordersearch',
                    emptyText: 'Поиск по любому полю',
                    allowBlank: true,
                    selectOnFocus: true,
                    width: 300
                }, {text: 'Применить', itemId: 'ordersearchapply', icon: 'resources/cart-2x.png'}, {text: 'Сбросить', itemId: 'ordersearchreset', icon: 'resources/cart-2x.png'}


            ]
        },

        {
            xtype: 'toolbar',
            docked: 'bottom',
            layout: 'hbox',
    defaults: {
                              flex: 1
                    },
            items: [{

                    xtype: 'datefield',
                    name: 'startorderdate',
                    fieldLabel: 'С',
                    itemId: 'startorderdate',
                    format: 'Y-m-d H:i:s'
                

                },
                {

                    xtype: 'datefield',
                    name: 'endorderdate',
                    fieldLabel: 'По',
                    itemId: 'endorderdate',
                    format: 'Y-m-d H:i:s'
              

                },
                {

                    xtype: 'fieldcontainer',
                    fieldLabel: 'Искать по',
                    defaultType: 'radiofield',
                    layout: 'hbox',
                    defaults: {
                              flex: 1
                    },
                    items: [
                        {
                            boxLabel: 'Номеру заказа',
                            name: 'searchtype',
                            width: 100,
                            //   inputValue: 'm',
                            id: 'ordradio1',
                            itemId: 'orderradionumber'
                        }, 
                        {
                            boxLabel: 'Состоянию',
                            name: 'searchtype',
                            width: 100,
                            //    inputValue: 'l',
                            id: 'ordradio3',
                            itemId: 'orderradiostatus'
                        }

                    ]
                }]}


    ],

    columns: [
        {text: 'Номер заказа', dataIndex: 'order_number'},
        {xtype: 'datecolumn', text: 'Дата создания', dataIndex: 'order_date', format: 'd-m-Y H:i'},
        {text: 'Состояние', dataIndex: 'status'}
    ],

    initComponent: function () {

        console.log('Grid is ready!');


        this.callParent(arguments);
    }
});




