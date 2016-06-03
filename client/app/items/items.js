'use strict';

angular.module('project4App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('items', {
        url: '/items',
        template: '<items></items>'
      });
  });
