'use strict';
angular.module('blogSystemApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];
    $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;
        $scope.userRole = Auth.getCurrentUser().role;
        $scope.currentUser = Auth.getCurrentUser().image;

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
