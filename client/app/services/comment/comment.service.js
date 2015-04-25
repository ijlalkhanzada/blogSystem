'use strict';

angular.module('blogSystemApp')
  .service('comment', function ($resource) {
        return $resource('/api/comments/:id/:controller', {
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
