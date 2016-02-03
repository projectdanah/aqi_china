angular.module('ChinaAQI')
.controller('ModulesController', function($scope, $http, AqiService) {

  $scope.$on('$stateChangeSuccess', function () {
    var defaultMessage = 'If you don\'t see a list of links here, you need to seed your database!\nIn your terminal, go to this app\'s directory and run `gulp seedDB`.\nThen try this page again.';

    AqiService.getAqiData().then(function(data) {
      console.log('data.coordinates', data.coordinates)
      $scope.coordinates = data.coordinates;

      if (!$scope.coordinates.length) {
        $scope.defaultMessage = defaultMessage;
      }
    });

    AqiService.getAqiDataByCountry('shenyang')

  });
});