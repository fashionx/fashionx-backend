var UserLocation = require('../../controller/user_locations.controller');

//API Server Endpoints

//Default Endpoints

module.exports = function (router) {
  	router.post('/user_locations', function (req, res){
  		UserLocation.create
  	}),
  	router.get('/user_locations/:id', function (req, res){
  		UserLocation.get
  	}),
  	router.put('/user_locations/:id', function (req, res){
  		UserLocation.update
  	}),
  	router.put('/user_locations/:id', function (req, res){
  		UserLocation.delete
  	})

/*module.exports = function (router) {
  router.post('/user_locations', UserLocation.create),
  router.get('/user_locations/:id', UserLocation.get),
  router.put('/user_locations/:id', UserLocation.update),
  router.delete('/user_locations/:id', UserLocation.delete)
*/

//Custom Endpoints

}
