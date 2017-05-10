Ext.define('OrdersApp.view.Login', { 
    extend: 'Ext.window.Window',
    xtype: 'login-dialog', 
    itemId: 'login-dialog',
    autoShow: true, 
    height: 170,
    width: 360, 
    layout: { 
    type: 'fit' 
    }, 
 //  iconCls: 'fa fa-key fa-lg', 
    title: 'Вход', 
    closeAction: 'hide', 
    closable: false, 
    draggable: false, 
    resizable: false, 
    
    dockedItems: [
        {
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
            
        {xtype: 'tbfill' },
        {
        xtype: 'button', 
        iconCls: 'fa fa-times fa-lg',
        text: 'Отменить',
        itemId: 'cancelbtn'
        },
        {
        xtype: 'button', 
        formBind: true, 
        iconCls: 'fa fa-sign-in fa-lg',
        text: 'Войти',
        itemId: 'submitbtn'
        }
        ]
        }
]
,
    
    items: [
    {
    xtype: 'form',
    itemId: 'authform',
   
    bodyPadding: 15,
   
    defaults: {
   
    xtype: 'textfield', 
    anchor: '100%',   
    labelWidth:80
    
    },
    items: [
    {
    name: 'user',
    fieldLabel: 'Пользователь',
    maxLength: 25

    },    {
        inputType: 'password', 
        name: 'password',
        fieldLabel: 'Пароль'
            }
     
        
    ]
    }]    
});
