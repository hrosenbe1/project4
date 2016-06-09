'use strict';
(function(){

class FinesComponent {
  constructor($state, fineService, cartService) {
    this.$state = $state;
    this.fineService = fineService;
    this.cartService = cartService;
    this.searchText = '';
    this.cart = [];

    // Load cart data from server
    this.cartService.getCart().then((json) => {
      this.updateCartFromServer(json.data);
    });

    // load inventory items from server
    this.getInventory();
  }

  find(cart, fine) {
    var len = cart.length;
    for (var i = 0; i < len; i++) {
      if (cart[i]._id === fine._id) {
        return cart[i];
      }
    }
    return null;
  }

  // diff the cartFromServer with our current cart and make the incremental modifications
  // doing it this way makes our animation work.
  updateCartFromServer(cartFromServer) {
    // add cartItems in cartFromServer not found in this.cart
    var len = cartFromServer.length;
    var cartFine;
    for (var i = 0; i < len; i++) {
      cartFine = cartFromServer[i];
      if (!this.find(this.cart, cartFine)) {
        this.cart.splice(i, 0, cartFine);
      }
    }

    // check for remove or update
    i = this.cart.length;
    while (i--) {
      cartFine = this.cart[i];
      // remove cartItems in this.cart not found in cartFromServer
      var found = this.find(cartFromServer, cartFine);
      if (!found) {
        this.cart.splice(i, 1);
      }
      // update cartItems in this.cart this have a different qty in cartFromServer
      else if (cartFine.qty !== found.qty) {
        cartFine.qty = found.qty;
      }
    }
  }

  getInventory() {
    this.fineService.getFines().then((json) => {
      this.inventory = json.data;
    });
  }

  addFine(fine) {
    this.cartService.addFine(fine).then((json) => {
      this.updateCartFromServer(json.data);
    }, function(err) {
      console.log('ERROR: addItem: ' + JSON.stringify(err));
    });
  }

  removeFine(fine) {
    this.cartService.removeFine(fine).then((json) => {
      this.updateCartFromServer(json.data);
    }, function(err) {
      console.log('ERROR: removeItem: ' + JSON.stringify(err));
    });
  }

  getCost(fine) {
    return this.cartService.getCost(fine);
  }

  clearCart() {
    return this.cartService.clearCart().then((json) => {
      this.updateCartFromServer(json.data);
    }, function(err) {
      console.log('clearCart delete ERROR: ' + JSON.stringify(err));
    });
  }

  goFine(fine) {
    this.$state.go('fineDetail', {
      fineId: fine._id
    });
  }

  getTotal() {
    return this.cartService.getTotal(this.cart);
  }
}

angular.module('project4App')
  .component('fines', {
    templateUrl: 'app/fines/fines.html',
    controller: FinesComponent
  });

})();
