'use strict';

angular.module('blogSystemApp')
  .directive('toggleClass', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
          element.on('click', function() {
              var pickClass = attrs.toggleClass;
            $('body').find('#nav-wrapper, .margin-left').toggleClass(pickClass);

          });
      }
    };
  });