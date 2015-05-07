'use strict';

angular.module('blogSystemApp')
  .controller('ViewCtrl', function ($scope, newService, comment, $state, Auth, $timeout) {

        newService.fullPost({id: $state.params.id}, function(post) {
            var id = post._id;
            $scope.post = post;
            comment.query({id: id}, function (list) {
                $scope.commentList = list;
                getReplyComment(0, list);
            });
        });

        $scope.comment = {};
        $scope.addComment = function(){
            if(Auth.isLoggedIn() === true) {
                $scope.comment.comment_author = Auth.getCurrentUser().userName;
                $scope.comment.comment_post_id = $state.params.id;
                comment.save($scope.comment, function(res){
                    comment.query({id: $state.params.id}, function(list){
                        $scope.commentList = list;
                        $scope.comment = {};
                    });
                });
            }
            else{

                $scope.errorMess = true;
                 angular.element('.modal')
                .modal('show');
                angular.element('.dimmer').destroy('modal');

                console.log('testing SideBar')
            }
        };

        $scope.replycomment = [];
        function getReplyComment(index, list){
                comment.getReplyComment({id: list[index]._id},function(rep){
                    $scope.replycomment = $scope.replycomment.concat(rep);
                    index++;
                    if(index < list.length){
                        getReplyComment(index, list);
                    }
                });
        }

        $scope.commentData = {};
        $scope.reply = function(comm){
          $scope.commentData.comment_parent = comm._id;
        };

        $scope.replyComment = function(){
          console.log('ssssssssssssssssssssssssssssssssssssssssssssssssssssssss')
            if(Auth.isLoggedIn() === true) {

                $scope.commentData.comment_author = Auth.getCurrentUser().userName;
                comment.save($scope.commentData, function (res) {
                    $scope.replycomment.push(res);
                    $scope.commentData.comment_content = '';
                });
            }
            else{
                $scope.errorMessage = true;

            }
        }

    //$('.modal')
      //.modal('show')
  });
