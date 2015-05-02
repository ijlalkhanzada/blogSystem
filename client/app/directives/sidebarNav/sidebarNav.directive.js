'use strict';

angular.module('blogSystemApp')
  .directive('sidebarNav', function () {
    return {
      templateUrl: 'app/directives/sidebarNav/sidebarNav.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        $("#menu").click(function(){
          $('.ui.large.inverted.vertical.sidebar.menu')
              .sidebar('attach events', '.launch.button');

          //  .sidebar(
          //  {
          //    overlay: false ,
          //    pusher  : '.pusher',
          //    transition  : 'auto',
          //    //sidebar : '.ui.sidebar',
          //    //active    : 'active',
          //    //animating : 'animating',
          //    //dimmed    : 'dimmed',
          //    //ios       : 'ios',
          //    pushable  : 'pushable'
          //    //pushed    : 'pushed',
          //    //right     : 'right',
          //    //top       : 'top',
          //    //left      : 'left',
          //    //bottom    : 'bottom',
          //    //visible   : 'visible'
          //  }
          //);
        })
      }
    };
  });
