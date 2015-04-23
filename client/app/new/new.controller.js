'use strict';

angular.module('blogSystemApp')
  .controller('NewCtrl', function ($scope, newService , Auth ,$state) {
    var userID = Auth.getCurrentUser()._id;
    $scope.post = {};
    $scope.post.post_author = Auth.getCurrentUser()._id;
    $scope.userName = Auth.getCurrentUser().userName;
    $scope.createPost = function(form){
      $scope.submitted = true;
      if(form.$valid){
        newService.save($scope.post, function(post){
          console.log(post);
          $state.go('posts');
        });
        }
    }

  });
