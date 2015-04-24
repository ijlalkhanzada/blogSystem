'use strict';

angular.module('blogSystemApp')
  .controller('EditUserCtrl', function ($scope, User, $state) {
        User.getUser({id: $state.params.id}, function(user){
          console.log(user)
          $scope.user = user;
        });
        $scope.userProfile = function(profile){
            $scope.user = profile;

        };

    $scope.update = function(user){
      User.updateProfile($scope.user);
      $state.go('user')
      console.log(' $scope.update' ,  User.updateProfile)
    }


  });
