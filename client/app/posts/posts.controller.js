'use strict';

angular.module('blogSystemApp')
  .controller('PostsCtrl', function ($scope, $http, Auth) {
        $scope.posts = [];
        var item = [];
        var userID = Auth.getCurrentUser()._id;
        $http.get('/api/posts/'+userID).success(function (postList) {
            $scope.posts = postList;
        });
  });
