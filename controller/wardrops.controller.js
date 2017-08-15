'use strict' ;

var Wardrops = require('../lib/WardrobSchema.model').Wardrop;

// Custom Response Body

/** create function to create Wardrops. */
exports.create = function (req, res) {
    Wardrops.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getWardrop to get Wardrop by id. */
exports.get = function (req, res) {
    Wardrops.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** updateWardrop function to get Wardrop by id. */
exports.update = function (req, res) {
    Wardrops.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
}

/** removeWardrop function to get Wardrop by id. */
exports.delete = function (req, res) {
    Wardrops.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
}
