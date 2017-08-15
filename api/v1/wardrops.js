var Wardrop = require('../../controller/wardrops.controller');

// API Server Endpoints

//Default Endpoints
module.exports = function (router) {
  	router.post('/products', function (req, res){
  		Wardrop.create
  	}),
  	router.get('/products/:id', function (req, res){
  		Wardrop.get
  	}),
  	router.put('/products/:id', function (req, res){
  		Wardrop.update
  	}),
  	router.put('/products/:id', function (req, res){
  		Wardrop.delete
  	})

/*module.exports = function(){
  router.post('/wardrops', Wardrop.create),
  router.get('/wardrops/:id', Wardrop.get),
  router.put('/wardrops/:id', Wardrop.update),
  router.delete('/wardrops/:id', Wardrop.delete)
*/

  //Custom Endpoints

}
