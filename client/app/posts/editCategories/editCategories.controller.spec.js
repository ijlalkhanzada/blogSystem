'use strict';

describe('Controller: EditCategoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('blogSystemApp'));

  var EditCategoriesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditCategoriesCtrl = $controller('EditCategoriesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
