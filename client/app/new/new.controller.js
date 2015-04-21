'use strict';

angular.module('blogSystemApp')
  .controller('NewCtrl', function ($scope, $http, Auth) {
    var userID = Auth.getCurrentUser()._id;
    $scope.userId = Auth.getCurrentUser()._id;
    $scope.createPost = function(){
        if($scope.postData === '' || $scope.postName === '') {
            return;
        }
        if(userID === $scope.userId) {
            $http.post('api/posts/', {post_content: $scope.postData, post_name: $scope.postName, post_author: $scope.userId});
            $scope.postData = '';
            $scope.postName = '';
            $scope.authorName = '';
        }
    }

  });
