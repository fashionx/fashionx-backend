'use strict' ;

const UserLocations = require('../lib/UserLocationSchema.model').UserLocation;

// Custom Response Body

/** create function to create UserLocations. */
exports.create = function (req, res) {
    UserLocations.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getUserLocationsfunction to get UserLocations by id. */
exports.get = function (req, res) {
    UserLocations.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** updateUserLocations function to get UserLocations by id. */
exports.update = function (req, res) {
    UserLocations.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
}

/** removeUserLocations function to get UserLocations by id. */
exports.delete = function (req, res) {
    UserLocations.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
}
