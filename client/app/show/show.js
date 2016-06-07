'use strict';

angular.module('project4App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('show', {
        url: '/show/:id',
        templateUrl: 'app/show/show.html',
        controller: 'ShowCtrl',
        controllerAs: 'vm',
        params: { id: null }
      });
  });
