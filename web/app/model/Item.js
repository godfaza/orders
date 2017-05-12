Ext.define('OrdersApp.model.Item', {
    extend: 'Ext.data.Model',
    fields: [{name :'id',type: 'int'}, 'name','code','price','category'],
    requires: 'OrdersApp.model.OrderElem',
    hasMany: {model: 'OrdersApp.model.OrderElem', name: 'elements',foreignKey:'item_id',
        associationKey:'elements'},

    proxy: {
        type: 'ajax',
        api: {
            create:      '/Orders/CreateItemServlet',
            read:      '/Orders/ReadItemServlet',
            update:  '/Orders/UpdateItemServlet',
            destroy:  '/Orders/DeleteItemServlet'
        },

        actionMethods: {
            read: 'GET',
            write: 'POST'
        },
        reader: {
            type: 'json',
            root: 'data'
           },
        writer: {
            type: 'json'

        }
    }
});
