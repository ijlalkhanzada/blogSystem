'use strict';

angular.module('blogSystemApp')
  .controller('UsersCtrl', function ($scope, $http,$state) {
     $scope.users = [];
        $http.get('/api/users').success(function(usersList){
            $scope.users = usersList;
          console.log('USERS :  ',$scope.users)
        });
       $scope.userProfile = function(profile){
      $state.go('profileUser', {id: profile._id});
    }
  });
