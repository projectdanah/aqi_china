angular.module('ChinaAQI')
.factory('AqiModel', [function() {

  function AqiModel(data) {
    this.aqi = data.aqi;
    this.concentration = data.concentration;
    this.country  = data.country;
    this.status = data.status;
    this.time = data.time;
  };

  AqiModel.prototype.d3erize = function(){
    return {aqi: this.aqi, time: this.time}
  }

  AqiModel.prototype.parseDate = function(){
    var timeSplit = this.time.split(" ");
    timeSplit[3] = parseInt(timeSplit[3])
    if (timeSplit[4] === 'PM'){ timeSplit[3] += 12; }
    var g = moment({ year :timeSplit[2], month :timeSplit[1], day :timeSplit[0], hour :timeSplit[3].toString()})
    this.time = new Date(g.toString())
    return this;
  }

  return AqiModel;
}]);


angular.module('ChinaAQI')
.factory('AqiCollection', [function() {

  function AqiCollection(coordinates) {
    this.coordinates = [] || coordinates;
  }

  return AqiCollection;
}]);
