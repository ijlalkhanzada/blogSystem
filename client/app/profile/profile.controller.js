'use strict';

angular.module('blogSystemApp')
  .controller('ProfileCtrl', function ($scope, User, $state) {

    User.getUser({id: $state.params.id}, function(user){
      $scope.user = user;
      console.log(user)
    });

    User.getUser({id: $state.params.id},function (user) {
        $scope.user = user;
        var oldUserName = user.userName;
        var oldEmail = user.email;

        $scope.update = function(user){
            if(oldUserName == user.userName && oldEmail == user.email) {
              User.updateUser({id: $state.params.id} , user, function(updateUser){
                console.log('Up',updateUser);
                $state.go('main');
              });
            }
        }
    });


  });
