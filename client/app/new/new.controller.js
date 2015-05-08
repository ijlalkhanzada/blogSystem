'use strict';

angular.module('blogSystemApp')
  .controller('NewCtrl', function ($scope, newService , Auth ,$state, categories, Upload) {

        $scope.fileSelected = function(files){
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    $scope.image = file;
                }
            }
        };

        var userID = Auth.getCurrentUser()._id;
        $scope.userName = Auth.getCurrentUser().userName;
        $scope.post = {};
        $scope.post.post_author = userID;
        $scope.createPost = function(form){
          if(form.$valid){
              $scope.submitted = true;
              if($scope.image) {
                  Upload.upload({
                      url: 'api/posts/upload/url',
                      file: $scope.image
                  }).progress(function (evt) {
                      $scope.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                      console.log('progress: ' + $scope.progressPercentage + '% ' + evt.config.file.name);
                  }).success(function (data, status, headers, config) {
                      console.log('file ' + config.file.name + 'uploaded. Response: ', data);
                      if (data.status == 'success') {
                          $scope.post.image = data.url_file;
                          newService.save($scope.post, function (res) {
                              console.log(res);
                              $state.go('posts');
                          });
                      }
                  });
              }
              else{
                  newService.save($scope.post, function (res) {
                      console.log(res);
                      $state.go('posts');
                  });
              }

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

    $('.dropdown')
      .dropdown({
        // you can use any ui transition
        transition: 'drop'
      })
    ;

  });
