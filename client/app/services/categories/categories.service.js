'use strict';

angular.module('blogSystemApp')
  .service('categories', function ($resource) {
        return $resource('/api/categories/:id/:controller', {
            id: '@_id'
        },
         {


         }
        );
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
