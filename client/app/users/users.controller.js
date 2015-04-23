'use strict';

angular.module('blogSystemApp')
  .controller('UsersCtrl', function ($scope, User, $state) {
        $scope.users = User.query();
//           console.log(User.query());
        $scope.showForm = false;
    $scope.userProfile = function(profile){
        $scope.user = profile;
        console.log($scope.user.userName);
        $scope.showForm = true;

        $scope.update = function(){
            User.updateProfile($scope.user);
            $scope.showForm = false;
        }
    };
  });
