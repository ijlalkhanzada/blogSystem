'use strict';

angular.module('blogSystemApp')
  .controller('PostsCtrl', function ($scope, newService, Auth , $state) {
        $scope.posts = [];
        var userID = Auth.getCurrentUser()._id;
        var userRole = Auth.getCurrentUser().role;
        $scope.post = {};
        if(userRole === 'author') {
          newService.get($scope.post, function(postList) {
                $scope.posts = postList;
          });
        }
        else if(userRole === 'editor' || userRole === 'admin'){
          newService.query(function(postList) {
                $scope.posts = postList;
            });
            console.log('Role Name:',userRole);
        }
           $scope.viwe = function(){
             newService.userProfileUp($scope.post);
             $state.go('editPost',{id: userID});
             console.log('content', newService.userProfileUp)
    }
  });
