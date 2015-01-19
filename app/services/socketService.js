'use strict';
var socketServer = 'https://squidsquad-api.herokuapp.com:443'

angular.module('squidSync.socketService', [])
    .service('socketService', function($http) {
        var socketService = {};
        socketService.joinRoom = function(roomId) {

        };
        return socketService
    });


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

