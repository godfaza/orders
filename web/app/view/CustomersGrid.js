Ext.define('OrdersApp.view.CustomersGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.custgrid',
    title: 'Заказчики',
    models: 'Customer',
    store: 'Customers',
     icon: 'resources/people-2x.png',
    
    
    
dockedItems : [{ 
    xtype : 'toolbar',
    docked: 'bottom', 
    items : [{text:'Создать заказчика',itemId:'addcustomer',icon: 'resources/person-2x.png'},{text:'Редактировать заказчика',iconCls:'save-icon16',itemId:'edcustomer',icon: 'resources/cog-2x.png'},{text:'Удалить заказчика',itemId:'delcustomer',icon: 'resources/x-2x.png'}]
    },
 {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Поиск',
                    name: 'search',
                    itemId: 'customersearch',
                    emptyText: 'Поиск по имени заказчика',
                    allowBlank: true,
                    selectOnFocus: true,
                    width: 250
                }, {text: 'Применить', itemId: 'customersearchapply', icon: 'resources/circle-check-2x.png'}, {text: 'Сбросить', itemId: 'customersearchreset', icon: 'resources/circle-x-2x.png'}]
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




