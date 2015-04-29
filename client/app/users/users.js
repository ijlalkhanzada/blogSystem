'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/admin/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersCtrl'
      });
  });
