'use strict';

angular.module('blogSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editPost', {
        url: '/admin/posts/editPost/:id',
        templateUrl: 'app/posts/editPost/editPost.html',
        controller: 'EditPostCtrl'
      });
  });