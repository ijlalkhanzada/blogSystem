'use strict';

angular.module('blogSystemApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $state) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    var currentUserId = $scope.getCurrentUser()._id;
        $scope.zzx = function(){
            console.log();
            $state.go('profile', {id: currentUserId})
        };

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });