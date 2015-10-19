'use strict';

exports.estimatesPriceGet = function(startLatitude, startLongitude, endLatitude, endLongitude) {

  var examples = {};
  
  examples['application/json'] = [ {
  "high_estimate" : 1.3579000000000001069366817318950779736042022705078125,
  "product_id" : "aeiou",
  "low_estimate" : 1.3579000000000001069366817318950779736042022705078125,
  "surge_multiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "estimate" : "aeiou",
  "display_name" : "aeiou",
  "currency_code" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.estimatesTimeGet = function(startLatitude, startLongitude, customerUuid, productId) {

  var examples = {};
  
  examples['application/json'] = [ {
  "image" : "aeiou",
  "product_id" : "aeiou",
  "description" : "aeiou",
  "display_name" : "aeiou",
  "capacity" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
