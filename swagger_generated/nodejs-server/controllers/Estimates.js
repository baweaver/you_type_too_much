'use strict';

var url = require('url');


var Estimates = require('./EstimatesService');


module.exports.estimatesPriceGet = function estimatesPriceGet (req, res, next) {
  var startLatitude = req.swagger.params['start_latitude'].value;
  var startLongitude = req.swagger.params['start_longitude'].value;
  var endLatitude = req.swagger.params['end_latitude'].value;
  var endLongitude = req.swagger.params['end_longitude'].value;
  

  var result = Estimates.estimatesPriceGet(startLatitude, startLongitude, endLatitude, endLongitude);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.estimatesTimeGet = function estimatesTimeGet (req, res, next) {
  var startLatitude = req.swagger.params['start_latitude'].value;
  var startLongitude = req.swagger.params['start_longitude'].value;
  var customerUuid = req.swagger.params['customer_uuid'].value;
  var productId = req.swagger.params['product_id'].value;
  

  var result = Estimates.estimatesTimeGet(startLatitude, startLongitude, customerUuid, productId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
