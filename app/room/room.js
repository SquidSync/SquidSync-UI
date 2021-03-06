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
        });
        $scope.videoDone = false;
        $scope.playerData = {
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=lQtQXEHmfTM'
        }
})
.directive('ssVideo', function() {
        var linker = function($scope, element, attrs){
            attrs.type = attrs.type || 'video/mp4';
            console.log($scope.playerData);

            var setup = {
                'techOrder': [$scope.playerData.source],
                src: $scope.playerData.url,
                'controls': true,
                preload: 'auto',
                autoplay: true,
                //width: 720,
                //height: 480
            };
            var videoid = 420;
            attrs.id = "ssVideo"+videoid;
            element.attr('id', attrs.id);
            var player = _V_(attrs.id, setup, function(){
                this.volume(0.05);
                this.on('play', function() {
                    console.log("Let's get this party started!")
                });
                this.on('ended', function() {
                    $scope.videoDone = true;
                    $scope.$apply();
                    console.log('awwww, we finished playing')
                });
            });
        };
        return {
            restrict: 'A',
            link: linker
        }
});