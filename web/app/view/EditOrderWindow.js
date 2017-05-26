Ext.define('OrdersApp.view.EditOrderWindow', {
    extend: 'Ext.window.Window',
    xtype: 'editorderwindow',
    itemId: 'editorderwindow',
    autoShow: true,
    height: 260,
    width: 360,
    layout: {
        type: 'fit'
    },
    title: 'Редактировать заказ',
    closeAction: 'destroy',
    closable: true,
    draggable: true,
    resizable: true,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [

                {xtype: 'tbfill'},
                {
                    xtype: 'button',
                    text: 'Сохранить',
                    itemId: 'editorderwindow_save_btn'
                },
                {
                    xtype: 'button',
                    text: 'Закрыть',
                    itemId: 'editorderwindow_close_btn'
                }
            ]
        }
    ]
    ,

    items: [
        {
            xtype: 'form',
            itemId: 'editorderwindow_form',

            bodyPadding: 15,

            defaults: {

                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 100

            },
            items: [
                {
                    name: 'name',
                    fieldLabel: 'Закачик',
                    dataIndex: 'name'



                },
                {
                    name: 'order_number',
                    fieldLabel: 'Номер заказа',
                    dataIndex: 'order_number'



                },
                {
                    name: 'order_date',
                    fieldLabel: 'Дата размещения',
                    dataIndex: 'order_date'


                },
                {
                    name: 'shipment_date',
                    fieldLabel: 'Дата отгрузки',
                    dataIndex: 'shipment_date'

                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Состояние заказа',
                    hiddenName: 'status',
                    itemId: 'statuscombo',
                    store: new Ext.data.SimpleStore({
                        data: [
                            [1, 'accepted'],
                            [2, 'processing'],
                            [3, 'shipped']
                        ],
                        id: 1,
                        fields: ['value', 'text']
                    }),
                    valueField: 'value',
                    displayField: 'text',
                    triggerAction: 'all',
                    editable: false
                },
                {
                    name: 'status',
                    fieldLabel: 'Состояние заказа',
                    dataIndex: 'status'

                }



            ]
        }],

    initComponent: function () {

        console.log('Order Edit ready!');

        this.callParent(arguments);
    }
    ,
    beforeactivate: function ()
    {

    }

});
