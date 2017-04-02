var Wardrop = require('../controller/wardrops');

// API Server Endpoints

//Default Endpoints
module.exports = function(){
  router.post('/wardrops', Wardrop.create),
  router.get('/wardrops/:id', Wardrop.get),
  router.put('/wardrops/:id', Wardrop.update),
  router.delete('/wardrops/:id', Wardrop.delete)

  //Custom Endpoints
  
}
