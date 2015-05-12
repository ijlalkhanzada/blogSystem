'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newCategory', {
        url: 'admin/category/new',
        templateUrl: 'app/posts/newCategory/newCategory.html',
        controller: 'NewCategoryCtrl'
      });
  });