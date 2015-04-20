'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts', {
        url: '/admin/posts',
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsCtrl'
      });
  });
