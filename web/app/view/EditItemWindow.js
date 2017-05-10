Ext.define('OrdersApp.view.EditItemWindow', {
    extend: 'Ext.window.Window',
    xtype: 'edititemwindow',
    itemId: 'edititemwindow',
    autoShow: true,
    height: 360,
    width: 360,
    layout: {
        type: 'fit'
    },
    title: 'Редактировать товар',
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
                    itemId: 'edititemwindow_save_btn'
                },
                {
                    xtype: 'button',
                    text: 'Закрыть',
                    itemId: 'edititemwindow_close_btn'
                }
            ]
        }
    ]
    ,

    items: [
        {
            xtype: 'form',
            itemId: 'edititemwindow_form',

            bodyPadding: 15,

            defaults: {

                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 60

            },
            items: [
                {
                    name: 'name',
                    fieldLabel: 'Название товара' ,
            dataIndex:'name'
         
            

                },
                {
                    name: 'code',
                    fieldLabel: 'Код товара',
                    dataIndex:'code'
                  

                },
                {
                    name: 'price',
                    fieldLabel: 'Цена',
                    dataIndex: 'price'

                },
                {
                    name: 'category',
                    fieldLabel: 'Категория',
                    dataIndex:'category'
       
                    

                }
                


            ]
        }],
    
    initComponent: function() {

                console.log('CustomerEdit ready!');
               
        this.callParent(arguments);
    }
    ,
    beforeactivate: function()
    {
        
    }
    
});
