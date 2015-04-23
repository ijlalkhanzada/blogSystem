'use strict';

angular.module('blogSystemApp')
  .controller('EditUserCtrl', function ($scope, User) {
//        $scope.user = User.get();
//      console.log( User.get());
        User.getUser();
//        $scope.userProfile = function(profile){
//            $scope.user = profile;
//            $scope.update = function(){
//                User.updateProfile($scope.user);
//            }
//        };
  });
