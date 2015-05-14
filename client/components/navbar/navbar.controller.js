'use strict';
angular.module('blogSystemApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, User, $state) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    if($scope.isLoggedIn() === true){
      User.get(function(user){
         $scope.getCurrentUser = user;
         $scope.userRole = user.role;
      });
    }

    $scope.$on('updated', function(a, res){
    });

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      console.log('Start Toggle Menu');
    });

    $('.dropdown')
      .dropdown({
        transition: 'drop'
      })

  });
