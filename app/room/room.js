'use strict';

angular.module('squidSync.room', [
    'ui.router'
])
.config(function($stateProvider) {
  $stateProvider
      .state('room', {
        url: "/room/:id",
        templateUrl: "room/room.html"
      })
})
.controller('View2Ctrl', [function() {

}]);