Ext.define('OrdersApp.view.EditCustomerWindow', {
    extend: 'Ext.window.Window',
    xtype: 'editcustomerwindow',
    itemId: 'editcustomerwindow',
    autoShow: true,
    height: 360,
    width: 360,
    layout: {
        type: 'fit'
    },
    title: 'Заказчик',
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
                    itemId: 'editcustomerwindow_save_btn'
                },
                {
                    xtype: 'button',
                    text: 'Закрыть',
                    itemId: 'editcustomerwindow_close_btn'
                }
            ]
        }
    ]
    ,

    items: [
        {
            xtype: 'form',
            itemId: 'editcustomerwindow_form',

            bodyPadding: 15,

            defaults: {

                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 60

            },
            items: [
                {
                    name: 'username',
                    fieldLabel: 'Имя пользователя' ,
            dataIndex:'name',
            editable: true
            

                },
                {
                    name: 'password',
                    fieldLabel: 'Пароль' ,
            dataIndex:'password',
            editable: true
            

                },
                {
                    name: 'name',
                    fieldLabel: 'Заказчик' ,
            dataIndex:'name',
            editable: false
            

                },
                {
                    name: 'code',
                    fieldLabel: 'Код',
                    dataIndex:'code',
                    readOnly: true

                },
                {
                    name: 'address',
                    fieldLabel: 'Адрес',
                    dataIndex:'address'

                },
                {
                    name: 'discount',
                    fieldLabel: 'Скидка',
                    dataIndex:'discount',
                    readOnly: true
                    

                }
                


            ]
        }],
    
    initComponent: function() {

                console.log('CustomerInfo ready!');
               
        this.callParent(arguments);
    }
    ,
    beforeactivate: function()
    {
        
    }
    
});
