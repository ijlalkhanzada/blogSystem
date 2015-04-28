'use strict';

angular.module('blogSystemApp')
  .controller('MainCtrl', function ($scope, Auth ,newService, comment, $state) {

    newService.query(function(postList) {
      $scope.posts = postList;
    });

        $scope.fullPost = function(post){
            $scope.postId = post._id;
            $state.go('view',{id: $scope.postId});
        };
  });
