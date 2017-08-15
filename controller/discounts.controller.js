'use strict';

const Discount = require('../lib/DiscountSchema.model').Discount;

//Custom Response Body

/** create function to create discounts. */
exports.create = function (req, res) {
    Discount.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getDiscount function to get Discount by id. */
exports.get = function (req, res) {
    Discount.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** updateDiscount function to get Discount by id. */
exports.update = function (req, res) {
    Discount.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
}

/** removeDiscount function to get Discount by id. */
exports.delete = function (req, res) {
    Discount.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
}
