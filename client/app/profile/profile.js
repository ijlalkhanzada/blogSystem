'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile/:id',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
      });
  });