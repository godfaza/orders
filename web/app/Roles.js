Ext.define('OrdersApp.Roles',
{
role: "user",
descr : "Sample Text",
constructor: function(config){
Ext.apply(this,config || {}); 
console.log("I'm a new role!");
}
});


