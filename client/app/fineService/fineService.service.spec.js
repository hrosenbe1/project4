'use strict';

describe('Service: fineService', function () {

  // load the service's module
  beforeEach(module('project4App'));

  // instantiate service
  var fineService;
  beforeEach(inject(function (_fineService_) {
    fineService = _fineService_;
  }));

  it('should do something', function () {
    expect(!!fineService).to.be.true;
  });

});
