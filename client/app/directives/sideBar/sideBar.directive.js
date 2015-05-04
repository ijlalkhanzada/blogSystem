'use strict';

angular.module('blogSystemApp')
  .directive('sideBar', function () {
    return {
      templateUrl: 'app/directives/sideBar/sideBar.html',
      restrict: 'EA',
      controller: 'MainCtrl',
      link: function (scope, element, attrs) {

        //$('.arrow').on("click", function (event) {
        //  $('.arrow-img').toggleClass('rotate');
        //  $('.arrow-img').toggleClass('rotate-reset');
        //});

        $('.sidebar')
          .sidebar('toggle')
        ;

        $('.ui.accordion')
          .accordion()
        ;
      }
    };
  });
