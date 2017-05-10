// JavaScript Document
Ext.define('OrdersApp.store.Users', {
    extend: 'Ext.data.Store',
    model: 'OrdersApp.model.User',
    data: [
        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
        { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
        { 'name': 'A',	   "email":"a@a.com",			 "phone":"555-222-1234" },
        { 'name': 'B',     "email":"b@sim.com", 	   	 "phone":"555-222-1244"  },
       	{ 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
    ]
});