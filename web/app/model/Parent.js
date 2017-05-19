Ext.define('OrdersApp.model.Parent', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],
    requires: ['OrdersApp.model.Kid'],
    
    HasMany: [
        {model: 'OrdersApp.model.Kid', primaryKey: 'id', foreignKey: 'parent_id',name: 'kids', associationKey:'kids'}
    ],
    proxy: {
        type: 'ajax',
        url: 'data/localdata.json',
        reader: {
            type: 'json',
            root: 'parent'
        }
    }
});
