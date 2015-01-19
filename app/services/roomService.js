'use strict';

angular.module('squidSync.roomService', [])
.service('roomService', function($http) {
    var roomService = {};
    roomService.rooms = function() {
        return $http.get('https://squidsquad-api.herokuapp.com/api/rooms').then(function(response) {
            return response.data
        });
    };
    return roomService
});
var API = 'https://squidsquad-api.herokuapp.com:443';
var control = io.connect(API+'/control');
var news = io.connect(API+'/news');
control.on('connect', function () {
    console.log('swag')
});
news.on('news', function () {
    news.emit('woot');
});
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { agent: navigator.userAgent });
});
socket.on('connect_error', function() {
    console.log('Got disconnect!');
    socket.disconnect();
});

