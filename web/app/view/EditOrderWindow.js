Ext.define('OrdersApp.view.EditOrderWindow', {
    extend: 'Ext.window.Window',
    xtype: 'editorderwindow',
    itemId: 'editorderwindow',
    autoShow: true,
    height: 400,
    width: 700,
    layout: {
        type: 'border'
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
         xtype: 'label',
         region: 'north',
        forId: 'myFieldId',
        text: 'My Awesome Field'
       // margin: '0 0 0 10'
    },

        
        
        {
            xtype: 'form',
             region: 'west',
              width: 300,
              height: 380,
                 split: true,
            itemId: 'editorderwindow_form',

            bodyPadding: 15,

            defaults: {

                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 100

            },
            items: [
      
                {
                    name: 'order_number',
                    fieldLabel: 'Номер заказа',
                    dataIndex: 'order_number'



                },
                {
                    xtype: 'datefield',
                    name: 'order_date',
                    fieldLabel: 'Дата размещения',
                    dataIndex: 'order_date'
              

                },
                {
                    xtype: 'datefield',
                    name: 'shipment_date',
                    fieldLabel: 'Дата отгрузки',
                    dataIndex: 'shipment_date'

                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Изменить состояние заказа',
                    hiddenName: 'statuscmb',
                    itemId: 'statuscombo',
                    store: new Ext.data.SimpleStore({
                        data: [
                            [1, 'Принят'],
                            [2, 'В обработке'],
                            [3, 'Отгружен']
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
        },
                     {
                    region: 'east',
                    xtype: 'elements',
                      width: 400,
              height: 380
                //    border: false,
                    //  height: 50,
               //     margins: '0 0 5 0'

                }

    ],

    initComponent: function () {

        console.log('Order Edit ready!');

        this.callParent(arguments);
    }
    ,
    beforeactivate: function ()
    {

    }

});
