'use strict';

describe('Controller: FilterPostsCtrl', function () {

  // load the controller's module
  beforeEach(module('blogSystemApp'));

  var FilterPostsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilterPostsCtrl = $controller('FilterPostsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
