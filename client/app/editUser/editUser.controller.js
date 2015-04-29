'use strict';

angular.module('blogSystemApp')
  .controller('EditUserCtrl', function ($scope, User, Auth, $state) {
        User.getUser({id: $state.params.id}, function(user){
          var oldUserName = user.userName;
          var oldEmail = user.email;
          $scope.user = user;

          $scope.userProfile = function(){
              if(oldUserName === user.userName && oldEmail === user.email) {
                  User.updateProfile($scope.user);
                  $state.go('user');
              }
          };
        });

  });
