var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  aqi: {
    type: String,
    required: true
  },
  country: {
    type: String
  },
  concentration: {
    type: String
  },
  time: {
    type: String
  },
  status: {
    type: String
  }
});

var Aqi = mongoose.model('Aqi', schema);

module.exports = Aqi;
