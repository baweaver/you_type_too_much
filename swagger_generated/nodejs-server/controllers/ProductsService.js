'use strict';

exports.productsGet = function(latitude, longitude) {

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
