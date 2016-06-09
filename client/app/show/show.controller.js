'use strict';

(function() {

class ShowCtrl {

  constructor($http, $stateParams, cartService) {
    var vm = this;
    var id = $stateParams.id;

    vm.price = 0;
    vm.item = {};

    vm.isInCart = cartService.isInCart;

    function emptyCart() {
      return {
        count: 1,
        attributes: [],
        item: {}
      };
    }
    vm.cart = emptyCart();

    vm.decrease = function() {
      if (vm.cart.count > 1) {
        vm.cart.count--;
      }
    };

    vm.increase = function() {
      vm.cart.count++;
    };

    vm.addCart = function(){
      if (vm.selected) {
        vm.cart.item = vm.item;
        vm.cart.attributes.push(vm.selected);
        cartService.addItem(vm.cart);
        vm.cart = emptyCart();
      }
    };

    $http.get('/api/items/' + id).then(response => {
      vm.item = response.data;
      vm.price = vm.item.price;
    });
  }
}



angular.module('project4App')
  .controller('ShowCtrl', ShowCtrl);




})();
