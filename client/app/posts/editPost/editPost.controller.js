'use strict';

angular.module('blogSystemApp')
  .controller('EditPostCtrl', function ($scope, newService, $state, categories) {
     newService.getPost({id: $state.params.id}, function(post){
         $scope.post = post;
         var id = post._id;

         $scope.updatePost = function(){
             newService.userProfileUp($scope.post);
             $state.go('posts');
         };
     });
        $scope.categories = categories.query();

        $scope.deletePost = function(){
          newService.delete({id: $state.params.id});
          $state.go('posts');
     };
  });
