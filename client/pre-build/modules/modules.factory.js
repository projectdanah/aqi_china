angular.module('ChinaAQI')
.service('AqiService', ['$http', 'AqiModel', 'AqiCollection', function($http, AqiModel, AqiCollection) {
  var aqiService = {};

  aqiService.getAqiData = function(){
    return $http.get('/api/modules/aqi').then(function(res) {
      var aqiCollection = new AqiCollection()
      res.data.forEach(function(datum){
        var a = new AqiModel(datum).parseDate()
        aqiCollection.coordinates.push(a.d3erize())
      })
      return aqiCollection;
    });
  }

  aqiService.getAqiDataByCountry = function(country){
    return $http.get('/api/modules/aqi' + country)
  }

  return aqiService;

}]);