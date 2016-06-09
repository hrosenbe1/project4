'use strict';

describe('Component: FinesComponent', function () {

  // load the controller's module
  beforeEach(module('project4App'));

  var FinesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    FinesComponent = $componentController('FinesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
