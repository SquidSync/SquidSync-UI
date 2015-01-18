'use strict';

// Declare app level module which depends on views, and components
angular.module('squidSync', [
  'ngRoute',
  'squidSync.view1',
  'squidSync.view2',
  'squidSync.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
