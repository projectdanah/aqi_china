var mongoose = require('mongoose');
var Aqi = require('./nodemodule.model');

module.exports = {
  index: function (req, res) {
    Aqi
      .find()
      .exec()
      .then(function(data) {
        res.send(data);
        console.log('dattta', data)
      });
 },
 create: function(req, res, next) {
  console.log('Request:', req.body)
    Aqi
      .create(req.body, function(err, data){
        if(err) return next(err);
        res.send(data);
      });
  },
  country: function(req, res, next){
    Aqi
    .find({country: { $regex : new RegExp(req.params.country, "i") }})
    .exec()
    .then(function(data){
      res.send(data)
    })
  }
}

