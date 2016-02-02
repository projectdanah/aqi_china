angular.module('ChinaAQI')
.factory('AqiFactory', function($http) {
  return {
    getAqiData: function() {
      return $http.get('/api/modules/aqi')
        .then(function(res) {
          return res.data;
        });
    },
    getAqiDataByCountry: function(country){
      return $http.get('/api/modules/aqi' + country)
    }
  };
});