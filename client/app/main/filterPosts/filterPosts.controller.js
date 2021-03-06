'use strict';

angular.module('blogSystemApp')
  .controller('FilterPostsCtrl', function ($scope, $state, newService) {
        newService.filterPost({id: $state.params.id}, function (categoryPost) {
            $scope.categoryPost = categoryPost;
            console.log('categoryPost',categoryPost);
        });

        $scope.fullPost = function(post){
          $scope.postId = post._id;
          $state.go('view',{id: $scope.postId});
        };
  });
