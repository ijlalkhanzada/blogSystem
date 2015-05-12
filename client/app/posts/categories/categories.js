'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categories', {
        url: '/admin/categories',
        templateUrl: 'app/posts/categories/categories.html',
        controller: 'CategoriesCtrl'
      });
  });
