'use strict';

angular.module('blogSystemApp')
  .controller('PostsCtrl', function ($scope, $http) {
        $scope.posts = [];
        $http.get('/api/posts/').success(function (postList) {
            $scope.posts = postList ;
        });
  });
