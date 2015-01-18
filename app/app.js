'use strict';

// Declare app level module which depends on views, and components
angular.module('squidSync', [
    'ui.router',
    'squidSync.roomService',
    'squidSync.dashboard',
    'squidSync.room',
    'squidSync.core',
    'squidSync.version'
])
.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
});
