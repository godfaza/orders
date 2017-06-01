Ext.define('OrdersApp.view.StatusBar', {
    extend: 'Ext.ux.statusbar.StatusBar',
    alias: 'widget.statuspanel',
    
     id: 'my-status',
     itemId:'mystatus',

        // defaults to use when the status is cleared:
        defaultText: 'Готов',
        defaultIconCls: 'default-icon',

        // values to set initially:
        text: 'Готов',
       icon: 'resources/thumb-up-2x.png'
  
});