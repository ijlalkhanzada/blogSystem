'use strict';

angular.module('blogSystemApp')
  .controller('NewCtrl', function ($scope, $http) {
    $scope.createPost = function(){
        if($scope.postData === '' || $scope.postName === '') {
            return;
        }
        $http.post('api/posts/',{post_content: $scope.postData, post_name: $scope.postName, post_author:$scope.authorName});
        $scope.postData = '';
        $scope.postName = '';
        $scope.authorName = '';
        console.log('kkkkkkkkk',$scope.postData)
    }

  });
