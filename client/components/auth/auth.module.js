'use strict';

angular.module('project4App.auth', ['project4App.constants', 'project4App.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
