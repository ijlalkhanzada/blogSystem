'use strict';

angular.module('blogSystemApp')
  .service('User', function () {
    return $resource('/api/users/:id/:controller', {
        id: '@_id'

      },
      {
        updateUser: {
          method: 'PUT',
          params: {
            id: '@_id'
          }
        }

      }
    );

  });
