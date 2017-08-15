'use strict' ;

const Location = require('../lib/LocationSchema.model').Location;

// Custom Response Body

/** create function to create Location. */
exports.create = function (req, res) {
    Location.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getLocation function to get Location by id. */
exports.get = function (req, res) {
    Location.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** updateLocation function to get Location by id. */
exports.update = function (req, res) {
    Location.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
}

/** removeLocation function to get Location by id. */
exports.delete = function (req, res) {
    Location.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
}
