'use strict';

angular.module('blogSystemApp')
  .controller('ProfileCtrl', function ($scope, $http, $state) {

    $http.get('/api/users/data/'+ $state.params.id).success(function (user) {
        $scope.user = user;
        var oldUserName = user.userName;
        var oldEmail = user.email;

        $scope.update = function(user){
            if(oldUserName == user.userName && oldEmail == user.email) {
                $http.put('/api/users/data/' + user._id, {userName: user.userName, email: user.email, firstName: user.firstName, lastName: user.lastName, mobile: user.mobile, age: user.age, city: user.city, country: user.country, gender: user.gender, company: user.company, designation: user.designation, website: user.website, state: user.state, description: user.description });
                console.log(oldUserName,user.userName, oldEmail, user.email);
            }
        }
    });

  });
