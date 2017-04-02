var ProductReservation = require('../controller/product_reservations');

//API Server Endpoints

//Default Endpoints
//Başlarına api/v1 eklenmesi gerekebilir.
// Ex: api/v1/product_reservations etc.
module.exports = function (router) {
  router.post('/product_reservations', ProductReservation.create),
  router.get('/product_reservations/:id', ProductReservation.get),
  router.put('/product_reservations/:id', ProductReservation.update),
  router.delete('/product_reservations/:id', ProductReservation.delete)

//Custom Endpoints

}
