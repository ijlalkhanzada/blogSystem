'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit', {
        url: '/admin/edit',
        templateUrl: 'app/edit/edit.html',
        controller: 'EditCtrl'
      });
  });