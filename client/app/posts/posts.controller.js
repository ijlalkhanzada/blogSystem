'use strict';

angular.module('blogSystemApp')
  .controller('PostsCtrl', function ($scope, newService, Auth , $state, categories) {

        var userID = Auth.getCurrentUser()._id;
        var userRole = Auth.getCurrentUser().role;
        if(userRole === 'author') {
            newService.query({id: userID}, function(postList) {
                $scope.posts = postList;
            });
        }
        else if(userRole === 'editor' || userRole === 'admin'){
            newService.query(function(postList) {
                $scope.posts = postList;
            });
        }
        else{
            $scope.message = 'This page not for you...!!';
        }

        $scope.view = function(post){
               var id = post._id;
               $state.go('editPost',{id: id});
        };

        $scope.categories = categories.query();

        $scope.x = function() {
          newService.filterPost({id: $scope.category}, function (f) {
             $scope.g = f;
             console.log($scope.g);
          });
        };
//
//                    var id = u._id;
//                    var c = u.category;
//                    console.log(c,$scope.category);
//                    if($scope.d.category == c) {
//                        console.log(c, $scope.d.category);
//                    }
//                    console.log($scope.g)

//                };





  });
