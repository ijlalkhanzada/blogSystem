'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit', {
        url: '/admin/post/edit',
        templateUrl: 'app/edit/edit.html',
        controller: 'EditCtrl'
      });
  });
