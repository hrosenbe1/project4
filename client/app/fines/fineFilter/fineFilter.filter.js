'use strict';

angular.module('project4App')
  .filter('fineFilter', function () {
    return function (input) {
      return 'fineFilter filter: ' + input;
    };
  });
