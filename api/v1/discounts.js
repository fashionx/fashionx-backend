var Discount = require('../controller/discounts');

// API Server Endpoints

//Default Endpoint
module.exports = function (router) {
  router.post('/discounts', Discount.create),
  router.get('/discounts/:id', Discount.get),
  router.put('/discounts/:id', Discount.update),
  router.delete('/discounts/:id', Discount.delete)

  //Custom Endpoint
}
