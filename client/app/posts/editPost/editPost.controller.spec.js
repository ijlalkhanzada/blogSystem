'use strict';

describe('Controller: EditPostCtrl', function () {

  // load the controller's module
  beforeEach(module('blogSystemApp'));

  var EditPostCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditPostCtrl = $controller('EditPostCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
