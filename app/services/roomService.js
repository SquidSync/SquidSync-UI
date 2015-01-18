'use strict';

angular.module('squidSync.roomService', [])
.service('roomService', function($http) {
    var roomService = {};
    roomService.rooms = function() {
        return $http.get('https://squidsquad-api.herokuapp.com/api/rooms').then(function(response) {
            console.log(response.data[0]);
            return response.data
        });
    };
    return roomService
});
