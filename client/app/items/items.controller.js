'use strict';
(function(){

class ItemsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('project4App')
  .component('items', {
    templateUrl: 'app/items/items.html',
    controller: ItemsComponent
  });

})();
