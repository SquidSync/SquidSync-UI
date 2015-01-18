'use strict';

angular.module('squidSync.dashboard', [
    'ui.router'
])
.config(function($stateProvider) {
      $stateProvider
          .state('core.dashboard', {
            url: "/",
            templateUrl: "dashboard/dashboard.html"
          })
})
.service('roomService', function($http) {
    var roomService = {};
    roomService.rooms = function() {
        return $http.get('https://squidsquad-api.herokuapp.com/api/rooms').then(function(response) {
            console.log(response.data[0]);
            return response.data
        });
    };
    return roomService
})
.controller('dashboardCtrl', function($scope, roomService) {
        $scope.rooms = [];
        roomService.rooms().then(function(response) {
            $scope.rooms = response
        });
        $scope.joinRoom = function(roomId) {
            console.log('Woot! We tried to join room'+roomId)
        }
});