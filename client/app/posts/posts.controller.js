'use strict';

angular.module('blogSystemApp')
  .controller('PostsCtrl', function ($scope, newService, Auth , $state) {

        var userID = Auth.getCurrentUser()._id;
        var userRole = Auth.getCurrentUser().role;
        if(userRole === 'author') {
          newService.query({id: userID}, function(postList) {
                $scope.posts = postList;
          });
        }
        else if(userRole === 'editor' || userRole === 'admin'){
          newService.query(function(postList) {
                $scope.posts = postList;
            });
        }
        else{ $scope.message = 'This page not for you...!!';}
  });
