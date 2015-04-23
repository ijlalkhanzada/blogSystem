'use strict';

describe('Service: newService', function () {

  // load the service's module
  beforeEach(module('blogSystemApp'));

  // instantiate service
  var newService;
  beforeEach(inject(function (_newService_) {
    newService = _newService_;
  }));

  it('should do something', function () {
    expect(!!newService).toBe(true);
  });

});
