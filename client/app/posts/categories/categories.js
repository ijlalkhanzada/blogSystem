'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categories', {
        url: '/categories',
        templateUrl: 'app/posts/categories/categories.html',
        controller: 'CategoriesCtrl'
      });
  });