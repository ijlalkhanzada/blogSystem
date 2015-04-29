'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('view', {
        url: '/posts/:id',
        templateUrl: 'app/main/view/view.html',
        controller: 'ViewCtrl'
      });
  });