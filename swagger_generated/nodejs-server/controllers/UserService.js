'use strict';

exports.historyGet = function(offset, limit) {

  var examples = {};
  
  examples['application/json'] = {
  "offset" : 123,
  "limit" : 123,
  "count" : 123,
  "history" : [ {
    "uuid" : "aeiou"
  } ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.meGet = function() {

  var examples = {};
  
  examples['application/json'] = {
  "last_name" : "aeiou",
  "promo_code" : "aeiou",
  "first_name" : "aeiou",
  "email" : "aeiou",
  "picture" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
