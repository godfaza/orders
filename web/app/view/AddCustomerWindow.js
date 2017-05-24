Ext.define('OrdersApp.view.AddCustomerWindow', {
    extend: 'Ext.window.Window',
    xtype: 'addcustomerwindow',
    itemId: 'addcustomerwindow',
    autoShow: true,
    height: 360,
    width: 500,
   layout: 'border',
    title: 'Создать заказчика',
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
                    itemId: 'addcustomerwindow_save_btn'
                },
                {
                    xtype: 'button',
                    text: 'Закрыть',
                    itemId: 'addcustomerwindow_close_btn'
                }
            ]
        }
    ]
    ,

    items: [
        {
            xtype: 'form',
            itemId: 'addcustomerwindow_login_form',
            region: 'north',
            bodyPadding: 15,
            

            defaults: {

                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 100

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
                    name: 'fullname',
                    fieldLabel: 'Полное имя' ,
            dataIndex:'fullname',
            editable: true
            

                },
                {
                    name: 'email',
                    fieldLabel: 'Email' ,
            dataIndex:'email',
            editable: true
            

                }
            ]
        }, {
            xtype: 'form',
            itemId: 'addcustomerwindow_customer_form',
            region: 'south',
            bodyPadding: 15,
            labelWidth:80,

            defaults: {

                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 100

            },
            items: [
                             
                {
                    name: 'name',
                    fieldLabel: 'Заказчик' ,
            dataIndex:'name',
            editable: true
            

                },

                {
                    name: 'address',
                    fieldLabel: 'Адрес',
                    dataIndex:'address'

                },
                {
                    name: 'discount',
                    fieldLabel: 'Скидка',
                    dataIndex:'discount'
         
                    

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
