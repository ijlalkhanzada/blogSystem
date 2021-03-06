'use strict';

angular.module('blogSystemApp')
  .controller('SignupCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid && ($scope.user.password === $scope.user.confirmPassword)) {
        Auth.createUser({
          userName: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
          .then( function() {
          // Account created, redirect to home
          //  alert("your Account will b Activeated after admin Approval");
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });

          });
      }

/*
      $scope.loginOuth = function(provider){
        $window.location.href = '/auth/' + provider;
        console.log('loginOuth',loginOuth)
      }
*/
    };

  });
