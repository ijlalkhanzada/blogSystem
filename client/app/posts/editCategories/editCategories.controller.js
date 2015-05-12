'use strict';

angular.module('blogSystemApp')
  .controller('EditCategoriesCtrl', function ($scope, categories, $state) {
      categories.get({id: $state.params.id},function(category) {
        $scope.category = category;
        var id = category._id;
        console.log('Get',category);

        $scope.updatePost = function(){
          categories.userProfileUp($scope.category);
          $state.go('categories');
        };

      });
  });
