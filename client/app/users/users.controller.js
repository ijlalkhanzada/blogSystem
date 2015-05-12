'use strict';

angular.module('blogSystemApp')
  .controller('UsersCtrl', function ($scope, User, $state) {
        $scope.users = User.query();
        $scope.userProfile = function(profile){
        $scope.b = profile;
        var id = profile._id;
        console.log($scope.b.userName, id);
        $state.go('editUser',{id: id});

    };
  });
