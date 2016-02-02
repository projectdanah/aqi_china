angular.module('Meaniscule')
.controller('ModulesController', function($scope, $http, AqiFactory) {

  $scope.$on('$stateChangeSuccess', function () {
    var defaultMessage = 'If you don\'t see a list of links here, you need to seed your database!\nIn your terminal, go to this app\'s directory and run `gulp seedDB`.\nThen try this page again.';

    AqiFactory.getAqiData()
      .then(function(data) {
        $scope.aqiData = data;

        if (!$scope.aqiData.length) {
          $scope.defaultMessage = defaultMessage;
        }
      });
  });
});