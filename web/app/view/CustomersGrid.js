Ext.define('OrdersApp.view.CustomersGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.custgrid',
    title: 'Заказчики',
    models: 'Customer',
    store: 'Customers',
    
    
    
dockedItems : [{ 
    xtype : 'toolbar',
    docked: 'bottom', 
    items : [{text:'Создать заказчика'},{text:'Редактировать заказчика',iconCls:'save-icon16',itemId:'edcustomer'},{text:'Удалить заказчика',itemId:'delcustomer'}]
    }],  


    

    columns: [
        { text: 'Заказчик',  dataIndex: 'name' },
        { text: 'Адрес', dataIndex: 'address' },
        { text: 'Скидка', dataIndex: 'discount' }
    ],
	
    initComponent: function() {
		
                console.log('Grid is ready!');
                

        this.callParent(arguments);
    }
});




