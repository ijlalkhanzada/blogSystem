'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new', {
        url: '/admin/new',
        templateUrl: 'app/new/new.html',
        controller: 'NewCtrl'
      });
  });