'use strict';

angular.module('blogSystemApp')
  .controller('ProfileCtrl', function ($scope, $http, $state) {

    $http.get('/api/users/data/'+ $state.params.id).success(function (user) {
        $scope.user = user;
        var id = $state.params.id;
        console.log("user.........",$scope.user);


        $scope.update = function(user){
            $http.put('/api/users/data/'+ id,{firstName: user.firstName, lastName: user.lastName, mobile: user.mobile, age: user.age, city: user.city, country: user.country, gender: user.gender, company: user.company, designation: user.designation, website: user.website, state: user.state, description: user.description });
            console.log($scope.user);
            console.log(id);
        }
    });

  });
