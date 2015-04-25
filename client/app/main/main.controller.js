'use strict';

angular.module('blogSystemApp')
  .controller('MainCtrl', function ($scope , Auth ,newService) {

    newService.query(function(postList) {
      $scope.posts = postList;
      console.log('yes',postList)
    });
  });
