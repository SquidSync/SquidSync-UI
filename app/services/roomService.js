'use strict';
var API = 'http://127.0.0.1:5000/api';
var socketAPI = '127.0.0.1:5000'
//var API = 'https://squidsquad-api.herokuapp.com/api';
//var socketAPI = 'https://squidsquad-api.herokuapp.com:443';

angular.module('squidSync.roomService', [])
.service('roomService', function($http) {
    var roomService = {};
    roomService.rooms = function() {
        return $http.get(API+'/rooms').then(function(response) {
            return response.data
        });
    };
    roomService.joinRoom = function() {

    }
    return roomService
});


var control = io.connect(socketAPI+'/control');
var news = io.connect(socketAPI+'/news');
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

