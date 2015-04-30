'use strict';

angular.module('blogSystemApp')
  .controller('FilterPostsCtrl', function ($scope, $state, newService) {
        newService.filterPost({id: $state.params.id}, function (categoryPost) {
            $scope.categoryPost = categoryPost;
            console.log($scope.ctg);
        });

        $scope.fullPost = function(category){
            $scope.postId = category._id;
            $state.go('view',{id: $scope.postId});
        };
  });
