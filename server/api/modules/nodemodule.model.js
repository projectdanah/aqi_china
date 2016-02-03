var mongoose = require('mongoose');
var moment = require('moment');

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


schema.pre('save', function(next){
  var timeArr = this.time.split(" ");
  if (timeArr[4]==="PM") { timeArr[3] = parseInt(timeArr[3]) + 12 }
  var parsedTime = moment({ y: timeArr[2], M: mappingMonths[timeArr[0]], d: parseInt(timeArr[1]) - 1, h: timeArr[3]});
  this.time = parsedTime.toString()
  next();
})

var Aqi = mongoose.model('Aqi', schema);
module.exports = Aqi;

var mappingMonths = {
  "Jan": 0,
  "Feb": 1,
  "Mar": 2,
  "Apr": 3,
  "May": 4,
  "June": 5,
  "July": 6,
  "Aug": 7,
  "Sept": 8,
  "Oct": 9,
  "Nov": 10,
  "Dec": 11
}