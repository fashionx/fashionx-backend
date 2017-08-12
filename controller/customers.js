'use strict';

const Customer = require('../lib/CustomerSchema').Customer;

/** create function to create Customer. */
exports.create = function (req, res) {
    Customer.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getCustomer function to get customer by id. */
exports.get = function (req, res) {
    Customer.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** updateCustomer function to get customer by id. */
exports.update = function (req, res) {
    Customer.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
}

/** removeCustomer function to get Customer by id. */
exports.delete = function (req, res) {
    Customer.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
}
