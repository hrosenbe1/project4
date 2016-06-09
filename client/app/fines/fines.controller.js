'use strict';
(function(){

class FinesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('project4App')
  .component('fines', {
    templateUrl: 'app/fines/fines.html',
    controller: FinesComponent
  });

})();
