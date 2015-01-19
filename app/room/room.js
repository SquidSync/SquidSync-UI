'use strict';

angular.module('squidSync.room', [
    'ui.router'
])
.config(function($stateProvider) {
  $stateProvider
      .state('core.room', {
        url: "/room/:roomId",
        templateUrl: "room/room.html"
      })
})
.controller('roomControl', function($scope, $rootScope, $stateParams) {
        console.log($stateParams.roomId);
        $scope.roomList = [];
        $scope.roomList.push({
            name: 'The Adventures of Derpicus',
            desc: 'Then I eat your wonton soup',
            thumb: 'http://i.imgur.com/y4qTbOM.jpg',
            plays: 26,
            addedBy: 'ChandlersHax'
        })
});