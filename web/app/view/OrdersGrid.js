Ext.define('OrdersApp.view.OrdersGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.ogrid',
    title: 'Заказы',
    models: 'Orders',
    store: 'Orders',
    
    
    
dockedItems : [{ 
    xtype : 'toolbar',
    docked: 'bottom', 
    items : [{text:'Создать заказ'},{text:'Редактировать заказ',iconCls:'save-icon16'},{text:'Удалить заказ'}]
    }],  


    

    columns: [
        { text: 'Номер заказа',  dataIndex: 'order_number' },
        { text: 'Дата создания', dataIndex: 'order_date' },
        { text: 'Состояние', dataIndex: 'status' }
    ],
	
    initComponent: function() {
		
                console.log('Grid is ready!');
                

        this.callParent(arguments);
    }
});




