// JavaScript Document
Ext.define('OrdersApp.view.MainPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.pcenter',
    itemId: 'pcenter',
    requires: [
        'OrdersApp.view.OrdersGrid',
        'OrdersApp.view.Catalogue',
        'OrdersApp.view.AddItemWindow',
         'OrdersApp.view.EditItemWindow',
         'OrdersApp.view.CustomersGrid',
         'OrdersApp.view.EditCustomerWindow',
         'OrdersApp.view.AddCustomerWindow',
         'OrdersApp.view.EditOrderWindow'
                //   'OrdersApp.view.Emailpanel',
                //   'OrdersApp.view.Tabpanel'
    ],
    /*
     dockedItems : [{ 
     xtype : 'toolbar',
     docked: 'bottom', 
     items : [{text:'Создать заказ'},{text:'Редактировать заказ',iconCls:'save-icon16'},{text:'Удалить заказ'}]
     }], */
    // title : 'All Users',

    items: [{
            xtype: 'catalogue',
            //  hidden: true,
            itemId: 'catgrid'

        },
        {
            xtype: 'ogrid',
            //  hidden: true,
            itemId: 'ogrid'

        },
    {
            xtype: 'custgrid',
            hidden: true,
            itemId: 'customersgrid'

        }],

    initComponent: function () {
        //    this.items[0].tab.hide();
        //   tabs.child('#home').tab.hide(); 

        this.callParent(arguments);
    }
});


