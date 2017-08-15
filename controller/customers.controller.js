'use strict';

const Customer = require('../lib/CustomerSchema.model').Customer;
const response = require('../helpers/response');
const constants = require('../resources/constants')


/** create function to create Customer. */
exports.create = function (req, res) {
    Customer.create(req.body, function(err, result) {
        if (!err) {
            return res.json({
              errorMessage : response.errorMessage(constants.errorMessageCustomer.unableToCreateCustomer),
              errorCodes   : response.errorCodes(constants.errorCodes),
              success      : response.success(true),
              data         : response.result.data(result)
            });

        } else {
          console.log(err);
            return res.send({errorMessage : 'Hatalı bir req body girdiniz ! '}); // 500 error (default)
        }
    });
};

/** getCustomer function to get customer by id. */
exports.get = function (req, res) {
    Customer.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json({
              errorMessage : response.errorMessage(constants.errorMessage.getAllCustomer),
              errorCodes   : response.errorCodes(constants.errorCodes),
              success      : response.success(true),
              data         : response.result.data(result)
            });
        } else {
          console.log(err);
            return res.send(err); // 500 error
        }
    });
};

/** updateCustomer function to get customer by id. */
exports.update = function (req, res) {
    Customer.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json({
              errorMessage : response.errorMessage(constants.errorMessage.updateCustomer),
              errorCodes   : response.errorCodes(constants.errorCodes),
              success      : response.success(true),
              data         : response.result.data(result)
            });
        } else {
          console.log(err);
            return res.send(err); // 500 error
        }
    });
}

/** removeCustomer function to get Customer by id. */
exports.delete = function (req, res) {
    Customer.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json({
              errorMessage : response.errorMessage(constants.errorMessage.removeByIdCustomer),
              errorCodes   : response.errorCodes(constants.errorCodes),
              success      : response.success(true),
              data         : response.result.data(result)
            });
        } else {
          console.log(err);
            return res.send(err); // 500 error
        }
    });
}
