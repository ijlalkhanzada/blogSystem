'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('filterPosts', {
        url: '/posts/category/:id',
        templateUrl: 'app/main/filterPosts/filterPosts.html',
        controller: 'FilterPostsCtrl'
      });
  });