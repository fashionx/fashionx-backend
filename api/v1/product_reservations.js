const ProductReservation = require('../../controller/product_reservations.controller');

//API Server Endpoints

//Default Endpoints

module.exports = function (router) {

  router.post('/product_reservations', ProductReservation.create),
  router.get('/product_reservations/:id', ProductReservation.get),
  router.put('/product_reservations/:id', ProductReservation.update),
  router.delete('/product_reservations/:id', ProductReservation.delete)


//Custom Endpoints

}


/*router.post('/product_reservations', function (req, res){
  ProductReservation.create
}),
router.get('/product_reservations/:id', function (req, res){
  ProductReservation.get
}),
router.put('/product_reservations/:id', function (req, res){
  ProductReservation.update
}),
router.put('/product_reservations/:id', function (req, res){
  ProductReservation.delete
})*/
