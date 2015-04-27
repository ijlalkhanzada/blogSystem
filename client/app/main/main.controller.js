'use strict';

angular.module('blogSystemApp')
  .controller('MainCtrl', function ($scope, Auth ,newService, comment, $state) {

    newService.query(function(postList) {
      $scope.posts = postList;
//      console.log('yes',postList)
    });

        $scope.fff = function(r){
            $scope.postId = r._id;
            $state.go('view',{id: $scope.postId});



        };
  });
