'use strict';

angular.module('project4App', [
                 'project4App.auth',
                 'project4App.admin',
                 'project4App.constants',
                 'ngCookies',
                 'ngResource',
                 'ngSanitize',
                 'btford.socket-io',
                 'ui.router',
                 'ui.bootstrap',
                 'validation.match',
                 'ngAnimate'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
