const Discount = require('../../controller/discounts.controller');

// API Server Endpoints

//Default Endpoint
module.exports = function (router) {

  router.post('/discounts', Discount.create),
  router.get('/discounts/:id', Discount.get),
  router.put('/discounts/:id', Discount.update),
  router.delete('/discounts/:id', Discount.delete)

  //Custom Endpoint

}


r



/*router.post('/discounts', function (req, res){
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
})*/
