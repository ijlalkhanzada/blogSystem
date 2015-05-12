'use strict';

angular.module('blogSystemApp')
  .controller('NewCategoryCtrl', function ($scope, categories, $state) {
    $scope.message = 'Hello';

    $scope.categories = categories.query();
    $scope.obj = {};
    $scope.addCategoriesTo = function(){
      categories.save($scope.obj, function (name) {
        console.log(name);
        $scope.categories = categories.query();
        $scope.obj.name = '';
        $state.go('categories');
      });
    }

  });
