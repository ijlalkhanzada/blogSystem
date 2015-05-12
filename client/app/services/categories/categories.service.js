'use strict';

angular.module('blogSystemApp')
  .service('categories', function ($resource) {
        return $resource('/api/categories/:id/:controller', {
            id: '@_id'

          },
          {
            userProfileUp: {
              method: 'PUT',
              params: {
                id: '@_id'
              }
            },
            getCategoryPost: {
              method: 'GET',
              params: {
                id: '@_id',
                controller: 'edit'
              }
            },
            getAllCategory: {
              method: 'GET',
              params: {
                isArray:true
              }
            }
          }
        );

  });
