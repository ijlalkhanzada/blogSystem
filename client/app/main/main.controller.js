'use strict';

angular.module('blogSystemApp')
  .controller('MainCtrl', function ($scope , Auth ,newService) {
    var userID = Auth.getCurrentUser()._id;
    var userRole = Auth.getCurrentUser().role;
    newService.query({id : userID}, function(postList) {
      $scope.posts = postList;
      console.log('yes',postList)
    });
  });
