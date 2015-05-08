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
            $scope.update = function(){
              $scope.submitted = true;
              if(oldUserName == user.userName && oldEmail == user.email) {
                  if($scope.image) {
                      Upload.upload({
                          url: 'api/users/upload/url',
                          file: $scope.image
                      }).progress(function (evt) {
                          $scope.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                          console.log('progress: ' + $scope.progressPercentage + '% ' + evt.config.file.name);
                      }).success(function (data, status, headers, config) {
                          console.log('file ' + config.file.name + 'uploaded. Response: ', data);
                          if (data.status == 'success') {
                              $scope.user.image = data.url_file;
                              User.updateProfile({id: $scope.user._id}, $scope.user, function (res) {
                                  console.log(res);
                                  $state.go('main');
                              });
                          }
                      });
                  } else{
                      User.updateProfile({id: $scope.user._id}, $scope.user, function (res) {
                          console.log(res);
                          $state.go('main');
                      });
                  }
              }
            };
             angular.element(".dropdown").dropdown(
            {
              transition: 'drop'
            }
          );

        });

  });
