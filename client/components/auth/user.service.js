'use strict';

angular.module('blogSystemApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
        updateProfile: {
        method: 'PUT'
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
