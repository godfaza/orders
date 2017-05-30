Ext.define('OrdersApp.view.Elements', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.elements',

    itemId: 'elements',
    title: 'Товары',
    icon: 'resources/cart-2x.png',
    requires: ['OrdersApp.model.Orders', 'OrdersApp.model.Customer', 'OrdersApp.store.Customer','OrdersApp.model.Item','OrdersApp.store.Item'],
    dockedItems: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{text: 'Удалить элемент заказа', itemId: 'delelement', icon: 'resources/delete-2x.png'}
             /*   {text: 'Редактировать элемент заказа', itemId: 'edelement', hidden: false, icon: 'resources/check-2x.png'}*/
            ]
        }],
    items: [{xtype: 'grid',
            itemId: 'elementsgrid',
            model: 'OrderElemExtended',
            store: 'OrderElemExtended',

            columns: [
                {text: 'Товар', dataIndex: 'item_name' },
                {text: 'Кол-во', dataIndex: 'items_count'},
                {text: 'Цена', dataIndex: 'item_price'}
            ]}]

});