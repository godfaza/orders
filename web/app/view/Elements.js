Ext.define('OrdersApp.view.Elements', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.elements',

    itemId: 'elements',
    title: 'Kорзина',
    icon: 'resources/cart-2x.png',
    requires: ['OrdersApp.model.Orders', 'OrdersApp.model.Customer', 'OrdersApp.store.Customer'],
    dockedItems: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{text: 'Удалить товар', itemId: 'delfromcart', icon: 'resources/delete-2x.png'},
                {text: 'Оформить заказ', itemId: 'checkout', hidden: false, icon: 'resources/check-2x.png'}
            ]
        }],
    items: [{xtype: 'grid',
            itemId: 'elementsgrid',
            model: 'OrderElem',
            store: 'OrderElem',

            columns: [
                {text: 'Товар', dataIndex: 'id', renderer: function (value, metaData, record, rowIdx, colIdx, store, view) {
                        return record.getItem().get('name');
                    }},
                {text: 'Кол-во', dataIndex: 'items_count'},
                {text: 'Цена', dataIndex: 'item_price'}
            ]}]

});