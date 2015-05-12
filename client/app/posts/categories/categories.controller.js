'use strict';

angular.module('blogSystemApp')
  .controller('CategoriesCtrl', function ($scope,categories,$state) {
    categories.query({id: $state.params.id},function(category) {
      $scope.categories = category;
      var id = category._id;
      console.log('W',category)

    });

    $scope.updatePost = function(){
      categories.userProfileUp($scope.category);
    };

    $scope.categoryName = function(name){
      //$state.go('editCategories', {id: name});

    };
  });
