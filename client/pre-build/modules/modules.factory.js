angular.module('Meaniscule')
.factory('AqiFactory', function($http) {
  return {
    getAqiData: function() {
      return $http.get('/api/modules/')
        .then(function(res) {
          return res.data;
        });
    }
  };
});