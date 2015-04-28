'use strict';

angular.module('blogSystemApp')
  .controller('ViewCtrl', function ($scope, newService, comment, $state) {
        newService.fullPost({id: $state.params.id}, function(post){
            var id = post._id;
            $scope.post = post;
            comment.query({id: id}, function(list){
                $scope.commentList = list;
                console.log($scope.length, id);
            });

          newService.query(function(postList) {
            $scope.posts = postList;
            console.log('view',$scope.posts)
          });


          $('.shape')
            .shape('set next side', '.side')
            .shape('flip up')

          ;
            $scope.addComment = function(){
                $scope.comment.comment_post_id = id;
                comment.save($scope.comment);
                comment.query({id: id}, function(list){
                $scope.commentList = list;
                $scope.post = '';
                });
            };
            $scope.addCommentRep = function(){
             console.log('yes')

            };
        })
  });
