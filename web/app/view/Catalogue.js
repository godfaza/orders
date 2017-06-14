Ext.define('OrdersApp.view.Catalogue', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.catalogue',
    itemId: 'catalogue',
    title: 'Каталог',
    icon: 'resources/list-rich-2x.png',
    models: ['Item'],
    store: 'Item',
    model: 'Item',
    requires: 'OrdersApp.store.Login',
    //  store: 'Item',

    dockedItems: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{text: 'Добавить в корзину', itemId: 'addtocart', icon: 'resources/cart-2x.png'}, {text: 'Добавить товар', itemId: 'additem', hidden: true, icon: 'resources/plus-2x.png'}, {text: 'Редактировать товар', itemId: 'editem', hidden: false, icon: 'resources/pencil-2x.png'}, {text: 'Удалить товар', itemId: 'delitem', hidden: false, icon: 'resources/delete-2x.png'}]
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Поиск',
                    name: 'search',
                    itemId: 'catsearch',
                    emptyText: 'Поиск по любому полю',
                    allowBlank: true,
                    selectOnFocus: true,
                    width: 250
                }, {text: 'Применить', itemId: 'catsearchapply', icon: 'resources/cart-2x.png'}, {text: 'Сбросить', itemId: 'catsearchreset', icon: 'resources/cart-2x.png'},
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Искать по',
                    defaultType: 'radiofield',

                    defaults: {
                        flex: 1
                    },
                    layout: 'hbox',
                    items: [
                        {
                            boxLabel: 'Имени',
                            name: 'searchtype',
                             width: 60,
                            //   inputValue: 'm',
                            id: 'radio1',
                            itemId: 'catradioname'
                        }, {
                            boxLabel: 'Категории',
                            name: 'searchtype',
                             width: 100,
                            //    inputValue: 'l',
                            id: 'radio2',
                            itemId: 'catradiocategory'
                        }
                    ]
                }]
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




