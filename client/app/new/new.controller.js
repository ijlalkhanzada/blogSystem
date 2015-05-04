'use strict';

angular.module('blogSystemApp')
  .controller('NewCtrl', function ($scope, newService , Auth ,$state, categories) {
        var userID = Auth.getCurrentUser()._id;
        $scope.post = {};
        $scope.userName = Auth.getCurrentUser().userName;
        $scope.post.post_author = userID;
        $scope.createPost = function(form){
          $scope.submitted = true;
            if(form.$valid){
              newService.save($scope.post, function(post){
              console.log(post);
              $state.go('posts');
            });
          }
        };

        $scope.categories = categories.query();
        $scope.obj = {};
        $scope.addCategoriesTo = function(){
          categories.save($scope.obj, function (name) {
              console.log(name);
              $scope.categories = categories.query();
              $scope.obj.name = '';
              $scope.show = false;
          });
        }

  });
