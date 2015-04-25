'use strict';

angular.module('blogSystemApp')
  .controller('ProfileCtrl', function ($scope, User, Auth, $state) {

        User.get(function(user){
            $scope.user = user;
            var oldUserName = user.userName;
            var oldEmail = user.email;
            $scope.update = function(){
              if(oldUserName == user.userName && oldEmail == user.email) {
                 User.updateProfile($scope.user);
                 $state.go('main');
              }
            }
        });
  });
