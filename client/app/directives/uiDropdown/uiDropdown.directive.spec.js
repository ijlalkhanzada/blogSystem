'use strict';

describe('Directive: uiDropdown', function () {

  // load the directive's module
  beforeEach(module('blogSystemApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ui-dropdown></ui-dropdown>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the uiDropdown directive');
  }));
});