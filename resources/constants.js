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
const errorCodes = {
  missingToken : 'missing_token',
  unableToAuthenticate : 'unable_to_authenticate',
  unableToFindUser : 'unable_to_find_user'
}

module.exports = {
  collectionNames : collectionNames,
  errorCodes : errorCodes
}
