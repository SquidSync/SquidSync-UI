'use strict';

angular.module('squidSync.dashboard', [
    'squidSync.roomService',
    'ui.router'
])
.config(function($stateProvider) {
      $stateProvider
          .state('core.dashboard', {
            url: "/",
            templateUrl: "dashboard/dashboard.html"
          })
})
.controller('dashboardCtrl', function($scope, roomService, $interval) {
        $scope.rooms = [];
        roomService.rooms().then(function(response) {
            $scope.rooms = response
        });
        $scope.joinRoom = function(roomId) {
            console.log('Woot! We tried to join room'+roomId)
        };
        $scope.loading = true;
        $interval(function(){
            $scope.loading = false;
            console.log('We should stop now...')
        }, 5000, 1)
});