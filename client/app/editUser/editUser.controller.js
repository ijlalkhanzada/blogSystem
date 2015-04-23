'use strict';

angular.module('blogSystemApp')
  .controller('EditUserCtrl', function ($scope, User, $state) {
        User.getUser({id: $state.params.id}, function(user){
          console.log(user)
          $scope.user = user;
        });
        $scope.userProfile = function(profile){
            $scope.user = profile;
            $scope.update = function(){
                User.updateProfile($scope.user);
            }
        };
  });
