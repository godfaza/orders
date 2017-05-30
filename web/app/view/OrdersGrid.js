Ext.define('OrdersApp.view.OrdersGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.ogrid',
    title: 'Заказы',
    models: 'Orders',
    store: 'Orders',
    
    
    
dockedItems : [{ 
    xtype : 'toolbar',
    docked: 'bottom', 
    items : [{text:'Редактировать заказ',itemId:'edorder',hidden:true},{text:'Удалить заказ',itemId:'delorder'}]
    }],  


    

    columns: [
        { text: 'Номер заказа',  dataIndex: 'order_number' },
        {  xtype: 'datecolumn' ,text: 'Дата создания', dataIndex: 'order_date', format: 'd-m-Y H:i' },
        { text: 'Состояние', dataIndex: 'status' }
    ],
	
    initComponent: function() {
		
                console.log('Grid is ready!');
                

        this.callParent(arguments);
    }
});




