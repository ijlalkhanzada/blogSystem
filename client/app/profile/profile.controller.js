'use strict';

angular.module('blogSystemApp')
  .controller('ProfileCtrl', function ($scope, User, Auth, $state, Upload) {

    $scope.fileSelected = function(files){
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          $scope.image = file;
        }
      }
    };

    User.get(function(user){
      $scope.user = user;
      var oldUserName = user.userName;
      var oldEmail = user.email;
      $scope.update = function(form){
        if(form.$valid) {
          if (oldUserName === user.userName && oldEmail === user.email){
            $scope.submitted = true;
            if ($scope.image) {
              Upload.upload({
                url: 'api/users/upload/url',
                file: $scope.image,
                method: 'put'
              }).progress(function (evt) {
                $scope.progressPercentage =
                  parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + $scope.progressPercentage + '% ' + evt.config.file);
              })
                .success(function (data, status, headers, config) {
                  console.log('file ' + config.file.name + 'uploaded. Response: ', data);
                  $scope.user.image = data.id;
                  User.updateProfile({id: $scope.user._id}, $scope.user, function (res) {
                    $scope.$emit("profile",res);
                    $state.go('main');
                  });
                });
            }
            else {
              User.updateProfile({id: $scope.user._id}, $scope.user, function (res) {
                $scope.$emit("profile",res);
                $state.go('main');
              });
            }
          }
          else{
            $scope.message = true;
          }
        }
      };
    });
  });
