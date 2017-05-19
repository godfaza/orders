Ext.define('OrdersApp.model.Kid', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'parent_id'],
    belongsTo: [
          {model: 'OrdersApp.model.Parent', name: 'kids', associationKey:'kids'}
    ]
 /*   proxy: {
        type: 'memory',
        reader: {
        type: 'json'
    }
    }*/
});
