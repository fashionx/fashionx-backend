var Product = require('../controller/products');

//API Server Endpoints

//Default Endpoints
module.exports = function(router) {
  router.post('/products', Product.create),
  router.get('/products/:id', Product.get),
  router.put('/products/:id', Product.update),
  router.delete('/products/:id', Product.delete)

  //Custom Endpoints
  
}
