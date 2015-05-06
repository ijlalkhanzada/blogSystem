'use strict';
angular.module('blogSystemApp')
  .directive('sideBar', function () {
    return {
      templateUrl: 'app/directives/sideBar/sideBar.html',
      restrict: 'EA',
      controller: 'MainCtrl',
      link: function (scope, element, attrs) {
        $('#menu-toggle').on('click',function(){
          $('.ui.sidebar')
            .sidebar('attach events', '.launch.button');
        });
        $('.ui.accordion')
          .accordion()

      }
    };
  });
