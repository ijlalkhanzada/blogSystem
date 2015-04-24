'use strict';

angular.module('blogSystemApp')
  .service('newService', function ($resource) {
    return $resource('/api/posts/:id/:controller', {
      id: '@_id'

    },
      {
        userProfileUp: {
        method: 'PUT',
        params: {
          id: '@_id'
        }
      }
    }
    );

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
