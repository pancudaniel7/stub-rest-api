module.exports = function(){
  var faker = require("faker");
  var _ = require("lodash");

  return {
      organizations: _.times(5, function(n){
          return   {
               "id":n,
               "name": faker.company.companyName(),
               "phone": faker.phone.phoneNumber(),
               "email": faker.internet.email(),
               "organizationType":{
                  "id":n,
                  "name": faker.company.companySuffix()
               },
               "address":{
                  "street": faker.address.streetName(),
                  "number": faker.random.number(),
                  "postalCode": faker.address.zipCode(),
                  "country": faker.address.country(),
                  "city": faker.address.city(),
                  "province": ""
               },
               "contacts": _.times(2, function(n){
                  return {
                     "id":n,
                     "firstName": faker.name.firstName(),
                     "lastName": faker.name.lastName(),
                     "phone": faker.phone.phoneNumber(),
                     "email": faker.internet.email(),
                     "address":{
                        "street": faker.address.streetName(),
                        "number": faker.random.number(),
                        "postalCode": faker.address.zipCode(),
                        "country": faker.address.country(),
                        "city": faker.address.city(),
                        "province": ""
                     },
                     "organization":null
                  }
               })
            }
      })
  }
}
