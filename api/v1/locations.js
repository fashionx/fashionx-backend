var Location = require('../controller/locations');

// API Server Endpoints

//Default Endpoints
module.exports = function (router) {
  router.post('/locations', Location.create),
  router.get('/locations/:id', Location.get),
  router.put('/locations/:id', Location.update),
  router.delete('/locations/:id', Location.delete)

  //Custom Endpoints
}
