'use strict';

angular.module('project4App')
  .service('fineService', function($http) {

    var svc = this;

    svc.findFineById = function(id) {
      return $http.get('/api/fines/' + id);
    };

    svc.getFines = function() {
      return $http.get('/api/fines');
   };
  });
