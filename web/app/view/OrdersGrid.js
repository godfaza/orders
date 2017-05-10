Ext.define('OrdersApp.view.OrdersGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.ogrid',
    title: 'Заказы',
    
    
dockedItems : [{ 
    xtype : 'toolbar',
    docked: 'bottom', 
    items : [{text:'Создать заказ'},{text:'Редактировать заказ',iconCls:'save-icon16'},{text:'Удалить заказ'}]
    }],  


    

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
    ],
	
    initComponent: function() {
		
                console.log('Grid is ready!');

        this.callParent(arguments);
    }
});




