Ext.define('OrdersApp.model.Item', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','code','price','category'],
   // requires: 'OrdersApp.model.OrderElem',
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
