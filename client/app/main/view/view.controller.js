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

            $scope.addComment = function(){
                $scope.comment.comment_post_id = id;
                comment.save($scope.comment);
                comment.query({id: id}, function(list){
                $scope.commentList = list;});
            };
        })
  });
