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
      },
          getPost: {
          method: 'GET',
          params: {
              id:'@_id',
              controller: 'edit'
          }
      },
          filterPost: {
          method: 'GET',
              isArray: true,
          params: {
              id:'@_id',
              controller: 'filter'
          }
      }
    }
    );

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
