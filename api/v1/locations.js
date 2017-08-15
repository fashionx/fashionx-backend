const Location = require('../../controller/locations.controller');

// API Server Endpoints

//Default Endpoints
module.exports = function (router) {
  	router.post('/locations', function (req, res){
  		Location.create
  	}),
  	router.get('/locations/:id', function (req, res){
  		Location.get
  	}),
  	router.put('/locations/:id', function (req, res){
  		Location.update
  	}),
  	router.put('/locations/:id', function (req, res){
  		Location.delete
  	})

// Custom Endpoints

}
