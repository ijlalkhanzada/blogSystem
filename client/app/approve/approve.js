'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('approve', {
        url: '/approve/:id',
        templateUrl: 'app/approve/approve.html',
        controller: 'ApproveCtrl'
      });
  });
