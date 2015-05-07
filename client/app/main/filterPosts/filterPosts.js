'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('filterPosts', {
        url: '/posts/filter/:id',
        templateUrl: 'app/main/filterPosts/filterPosts.html',
        controller: 'FilterPostsCtrl'
      });
  });