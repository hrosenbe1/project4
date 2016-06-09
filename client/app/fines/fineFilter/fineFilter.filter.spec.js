'use strict';

describe('Filter: fineFilter', function () {

  // load the filter's module
  beforeEach(module('project4App'));

  // initialize a new instance of the filter before each test
  var fineFilter;
  beforeEach(inject(function ($filter) {
    fineFilter = $filter('fineFilter');
  }));

  it('should return the input prefixed with "fineFilter filter:"', function () {
    var text = 'angularjs';
    expect(fineFilter(text)).to.equal('fineFilter filter: ' + text);
  });

});
