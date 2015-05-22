'use strict';

angular.module('blogSystemApp')
  .controller('ApproveCtrl', function ($scope,$timeout,$state,User) {
    $scope.user = {};

    $timeout(function(){

      $scope.user._id = $state.params.id;
      console.log('approve', $scope.user._id)

        User.updateUser({id: $state.params.id})

    },3000)
  });
