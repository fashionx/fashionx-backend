const Customer = require('../../controller/customers.controller');
// API Server Endpoints

//Default Endpoints
module.exports = function(router){

	router.post('/customers', Customer.create),
	router.get('/customers/:id', Customer.get),
	router.put('/customer/:id', Customer.update),
	router.delete('/customers/:id', Customer.delete)


//Custom Endpoints

}


/*router.post('/customers', function (req, res){
	Customer.create
}),
router.get('/customers/:id', function (req, res){
	Customer.get
}),
router.put('/customers/:id', function (req, res){
	Customer.update
}),
router.put('/customers/:id', function (req, res){
	Customer.delete
})
*/


//router.put('/customers/:id', Customer.update),
//router.delete('/customers/:id', Customer.delete)
