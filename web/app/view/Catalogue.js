Ext.define('OrdersApp.view.Catalogue', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.catalogue',
    itemId: 'catalogue',
    title: 'Каталог',
    models: ['Item'],
    store: 'Item',
    model:'Item',
    requires: 'OrdersApp.store.Login',
  //  store: 'Item',

    dockedItems: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{text: 'Добавить в корзину',itemId: 'addtocart',icon: 'resources/cart-2x.png'}, {text: 'Добавить товар', itemId: 'additem', hidden: true,icon: 'resources/plus-2x.png'}, {text: 'Редактировать товар', itemId: 'editem', hidden: false,icon: 'resources/pencil-2x.png'},{text: 'Удалить товар', itemId: 'delitem', hidden: false,icon: 'resources/delete-2x.png'}]
        }],

    columns: [
        {text: 'Название товара', dataIndex: 'name'},
        {text: 'Код товара', dataIndex: 'code', flex: 1},
        {text: 'Категория', dataIndex: 'category'},
        {text: 'Цена', dataIndex: 'price'}
    ],

    initComponent: function () {


        console.log('Catalogue is ready!');





        this.callParent(arguments);
    }
});




