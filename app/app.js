'use strict';

// Declare app level module which depends on views, and components
angular.module('squidSync', [
  'ui.router',
  'squidSync.dashboard',
  'squidSync.room',
  'squidSync.version'
])
.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
});
