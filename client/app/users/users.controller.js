'use strict';

angular.module('blogSystemApp')
  .controller('UsersCtrl', function ($scope, $http) {
     $scope.users = [];
        $http.get('/api/users').success(function(usersList){
            $scope.users = usersList;
        })
  });
