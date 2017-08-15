'use strict';

const collectionNames = {
  Customers : 'Customers',
  Discounts : 'Discounts',
  Locations : 'Locations',
  ProductReservations : 'ProductReservations',
  Products : 'Products',
  UserLocations : 'UserLocations',
  Users : 'Users',
  Wardrops : 'Wardrops'
}

// 'll add other error codes'
const errorMessagesUser = {
  missingToken : 'missing_token',
  unableToAuthenticate : 'unable_to_authenticate',
  unableToFindUser : 'unable_to_find_user',
}

//CustomerController
const errorMessageCustomer = {
  unableToCreateCustomer : 'Customer Create Success !',
  getAllCustomer : 'Get All Customer Success !',
  updateCustomer : 'Customer Update Success !',
  removeByIdCustomer : 'Customer Remove By ID Success !'
}

// HTTP code açıklamaları yada Throw.js implementasyonu
const errorCodes = {

}

module.exports = {
  collectionNames : collectionNames,
  errorCodes : errorCodes,
  errorMessages : errorMessagesUser,
  errorMessageCustomer : errorMessageCustomer
}
