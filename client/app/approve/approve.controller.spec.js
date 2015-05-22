'use strict';

describe('Controller: ApproveCtrl', function () {

  // load the controller's module
  beforeEach(module('blogSystemApp'));

  var ApproveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApproveCtrl = $controller('ApproveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
