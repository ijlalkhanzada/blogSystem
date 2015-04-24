'use strict';

angular.module('blogSystemApp')
  .controller('EditUserCtrl', function ($scope, User, $state) {
        User.getUser({id: $state.params.id}, function(user){
          console.log(user);
          $scope.user = user;

            $scope.userProfile = function(){
                console.log($scope.user);
                User.updateProfile($scope.user);
                $state.go('user')
            };
        });

  });
