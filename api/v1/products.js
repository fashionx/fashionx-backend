var Product = require('../../controller/products');

//API Server Endpoints

//Default Endpoints
module.exports = function (router) {
  	router.post('/products', function (req, res){
  		Product.create
  	}),
  	router.get('/products/:id', function (req, res){
  		Product.get
  	}),
  	router.put('/products/:id', function (req, res){
  		Product.update
  	}),
  	router.put('/products/:id', function (req, res){
  		Product.delete
  	})

/*module.exports = function(router) {
  router.post('/products', Product.create),
  router.get('/products/:id', Product.get),
  router.put('/products/:id', Product.update),
  router.delete('/products/:id', Product.delete)
*/
  //Custom Endpoints

}
