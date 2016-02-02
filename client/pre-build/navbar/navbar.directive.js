angular.module('ChinaAQI')
.directive("navbar", function(){
	return {
		restrict: "E",
		templateUrl: "/pre-build/navbar/navbar.html"
	};
});