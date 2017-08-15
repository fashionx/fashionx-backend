const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var json_data = {"name":"amita","pass":"12345"};
  res.render(json_data);
});

module.exports = router;
