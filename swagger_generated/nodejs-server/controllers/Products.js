'use strict';

var url = require('url');


var Products = require('./ProductsService');


module.exports.productsGet = function productsGet (req, res, next) {
  var latitude = req.swagger.params['latitude'].value;
  var longitude = req.swagger.params['longitude'].value;
  

  var result = Products.productsGet(latitude, longitude);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
