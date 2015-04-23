'use strict';

angular.module('blogSystemApp')
  .controller('PostsCtrl', function ($scope, $http, Auth) {
        $scope.posts = [];
        var userID = Auth.getCurrentUser()._id;
        var userRole = Auth.getCurrentUser().role;
        if(userRole === 'author') {
            $http.get('/api/posts/' + userID).success(function (postList) {
                $scope.posts = postList;
            });
        }
        else if(userRole === 'editor' || userRole === 'admin'){
            $http.get('/api/posts/').success(function (postList) {
                $scope.posts = postList;
            });
          console.log('Role Name:',userRole);

        }
  });
