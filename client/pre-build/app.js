var $ = require("jquery");
global.$ = $;
global.jQuery = $;

var moment = require('moment');
global.moment = moment;

var _ = require('lodash');
global._ = _;

var d3 = require('d3');
global.d3 = d3;

require('angular');
require('bootstrap');
require('angular-ui-router');

var app = angular.module('ChinaAQI', ['ui.router']);
require('./modules');
require('./home');
require('./navbar');

app.config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
   // This turns off hashbang urls (/#about) and changes it to something normal (/about)
   $locationProvider.html5Mode(true);
   // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
   $urlRouterProvider.otherwise('/');

   $stateProvider.state('home', {
      url: '/',
      templateUrl: '/pre-build/home/home.html',
      controller: 'HomeController'
    })
   .state('modules', {
      url: '/modules',
      templateUrl: '/pre-build/modules/modules.html',
      controller: 'ModulesController'
    });
});
