'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editUser', {
        url: '/admin/user/:id',
        templateUrl: 'app/editUser/editUser.html',
        controller: 'EditUserCtrl'
      });
  });