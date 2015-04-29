'use strict';

angular.module('blogSystemApp')
  .directive('uiDropdown', function () {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.dropdown();
      }
    };
  });
