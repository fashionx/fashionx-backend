'use strict' ;

const Product_Reservation = require('../lib/ProductReservationSchema.model').Product_Reservation;

// Custom Response Body
// Loglar text üzerine kayıt ediliyor olucak.(yada db'de tutuluyor olabilir)

/** create function to create ProductReservation. */
exports.create = function (req, res) {
    Product_Reservation.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getProductReservation function to get ProductReservation by id. */
exports.get = function (req, res) {
    Product_Reservation.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** updateProductReservation function to get ProductReservation by id. */
exports.update = function (req, res) {
    Product_Reservation.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
}

/** removeProductReservation function to get ProductReservation by id. */
exports.delete = function (req, res) {
    Product_Reservation.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err); //Loglar Text üzerine kayıt edilecek
            return res.send(err); // 500 error
        }
    });
}
