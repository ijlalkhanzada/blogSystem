'use strict';

describe('Directive: sidebarNav', function () {

  // load the directive's module and view
  beforeEach(module('blogSystemApp'));
  beforeEach(module('app/directives/sidebarNav/sidebarNav.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sidebar-nav></sidebar-nav>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the sidebarNav directive');
  }));
});