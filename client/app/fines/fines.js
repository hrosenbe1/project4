'use strict';

angular.module('project4App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fines', {
        url: '/fines',
        template: '<fines></fines>'
      });
  });
