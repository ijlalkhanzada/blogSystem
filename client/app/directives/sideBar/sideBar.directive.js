'use strict';
angular.module('blogSystemApp')
  .directive('sideBar', function () {
    return {
      restrict: 'EA',
      replace: false,
      templateUrl: 'app/directives/sideBar/sideBar.html',
      controller: 'MainCtrl',
      link: function (scope, element, attrs) {
        $('#sidebar-toggle').on('click',function(){
          console.log('testing sidebar');
          $('.ui.sidebar')
            .sidebar('attach events', '.launch.button');
        });
        $('.ui.accordion')
          .accordion()

      }
    };
  });
