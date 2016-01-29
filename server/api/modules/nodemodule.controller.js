var mongoose = require('mongoose');
var Aqi = require('./nodemodule.model');

module.exports = {
  index: function (req, res) {
    Aqi
      .find()
      .exec()
      .then(function(data) {
        res.send(data);
      });
 },
 create: function(req, res, next) {
  console.log('Request:', req.body)
    Aqi
      .create(req.body, function(err, data){
        if(err) return next(err);
        console.log('DID WE GET DATA?', data)
        res.send(data);
      });
  }
}

