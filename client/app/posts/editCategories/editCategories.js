'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editCategories', {
        url: '/admin/category/edit/:id',
        templateUrl: 'app/posts/editCategories/editCategories.html',
        controller: 'EditCategoriesCtrl'
      });
  });
