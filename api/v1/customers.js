var Customer = require('../controller/customers');

// API Server Endpoints

//Default Endpoints
module.exports = function(router){
	router.post('/customers', Customer.create),
	router.get('/customers/:id', Customer.get),
	router.put('/customers/:id', Customer.update),
	router.delete('/customers/:id', Customer.delete)

//Custom Endpoints

}
