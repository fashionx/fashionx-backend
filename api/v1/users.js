var User = require('../controller/users');

//API Server Endpoints

//Default Endpoints
module.exports = function(router){
  router.post('/users', User.create),
  router.get('/users/:id', User.get),
  router.put('/users/:id', User.update),
  router.delete('/users/:id', User.delete)

//Custom Endpoints

}
