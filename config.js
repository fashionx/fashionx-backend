
module.exports = {

  'secret' : 'a8f8234aui54w3odn564tk',
  'database' : 'mongodb://admin:admin@ds129610.mlab.com:29610/fashionx-db',

  'response' : {
    'success' : Boolean,
    'message' : String
  }

};

/*
ALternative response body:
{ //user
  "errorCode": "0",
  "errorMessage": "",
  "success": true,
  "data": {
    "token": "85f4086e-9862-4223-a227-412d4d309c01=1490997348879",
    "longToken": "5615f954-ff0d-4e04-bc2f-93e7d9286698=1490997348886.1b8fc2d8-af53-485b-a1f0-01b62bae4402",
    "email": "appfashionx@gmail.com"
  }
}

{
  "errorCode": "0",
  "errorMessage": "",
  "success": true,
  "data": {
    "offset": 0,
    "results": [
      {'response.body'}
    ]
*/
