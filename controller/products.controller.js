'use strict' ;

const Products = require('../lib/ProductSchema.model').Product;

//Custom Response body

/** create function to create Product. */
exports.create = function (req, res) {
    Products.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getProduct function to get Product by id. */
exports.get = function (req, res) {
    Products.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** updateProduct function to get Product by id. */
exports.update = function (req, res) {
    Products.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
}

/** removeProduct function to get Product by id. */
exports.delete = function (req, res) {
    Products.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
}
