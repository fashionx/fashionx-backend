var Discount = require('../../controller/discounts');

// API Server Endpoints

//Default Endpoint
module.exports = function (router) {
  	router.post('/discounts', function (req, res){
  		Discount.create
  	}),
  	router.get('/discounts/:id', function (req, res){
  		Discount.get
  	}),
  	router.put('/discounts/:id', function (req, res){
  		Discount.update
  	}),
  	router.put('/discounts/:id', function (req, res){
  		Discount.delete
  	})

  //Custom Endpoint
}
