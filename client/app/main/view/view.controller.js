'use strict';

angular.module('blogSystemApp')
  .controller('ViewCtrl', function ($scope, newService, comment, $state, Auth, $timeout) {
        newService.fullPost({id: $state.params.id}, function(post){
            var id = post._id;
            $scope.post = post;
            comment.query({id: id}, function(list){
                $scope.commentList = list;
                console.log(list);
//              var t = "";
//              var u;
//              for(u in list){
//                t = list[u];
//                console.log(t._id);
//              }
            });

            $scope.addComment = function(){
                $scope.comment.comment_post_id = id;
                comment.save($scope.comment);
                comment.query({id: id}, function(list){
                $scope.commentList = list;
                $scope.comment = '';
                });
            };


          $scope.commentBody = function(commentt){
            comment.getReplyComment({id: commentt._id},function(replycomment){
              $scope.replycomment = replycomment;
            })
          };

          $scope.commentData = {};
          $scope.reply = function(comm){
            $scope.commentData.comment_parent = comm._id;
            $scope.replyComment = function(){
                comment.save($scope.commentData);
                comment.getReplyComment({id: comm._id},function(replycomment){
                    $scope.replycomment = replycomment;
                    $scope.commentData.comment_content = '';
                })

            }
          };
        })

  });
