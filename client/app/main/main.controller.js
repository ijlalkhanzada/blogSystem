'use strict';

angular.module('blogSystemApp')
  .controller('MainCtrl', function ($scope, Auth ,newService,comment, $state, categories) {

    newService.query(function(postList) {
      $scope.posts = postList;
    });

    $scope.fullPost = function(post){
       $scope.postId = post._id;
       $state.go('view',{id: $scope.postId});
    };
    $scope.categories = categories.query();
    $scope.categoryName = function(name) {
       $state.go('filterPosts',{id: name})
    };

  });
