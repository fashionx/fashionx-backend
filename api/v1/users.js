const  User = require('../../controller/users.controller');

//API Server Endpoints

//Default Endpoints

module.exports = function(router){
  
  router.post('/users', User.create),
  router.get('/users/:id', User.get),
  router.put('/users/:id', User.update),
  router.delete('/users/:id', User.delete)


//Custom Endpoints

}



/*module.exports = function (router) {
  	router.post('/users', function (req, res){
  		User.create
  	}),
  	router.get('/users/:id', function (req, res){
  		User.get
  	}),
  	router.put('/users/:id', function (req, res){
  		User.update
  	}),
  	router.put('/users/:id', function (req, res){
  		User.delete
  	})*/
