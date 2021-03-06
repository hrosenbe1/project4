'use strict';
(function(){

class ItemsComponent {
  constructor($state, itemService, cartService) {
    this.$state = $state;
    this.itemService = itemService;
    this.cartService = cartService;
    this.searchText = '';
    this.cart = [];

    // Load cart data from server
    this.cartService.getCart().then((json) => {
      this.updateCartFromServer(json.data);
    });

    // load inventory items from server
    this.getArt();
  }

  find(cart, item) {
    var len = cart.length;
    for (var i = 0; i < len; i++) {
      if (cart[i]._id === item._id) {
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
    var cartItem;
    for (var i = 0; i < len; i++) {
      cartItem = cartFromServer[i];
      if (!this.find(this.cart, cartItem)) {
        this.cart.splice(i, 0, cartItem);
      }
    }

    // check for remove or update
    i = this.cart.length;
    while (i--) {
      cartItem = this.cart[i];
      // remove cartItems in this.cart not found in cartFromServer
      var found = this.find(cartFromServer, cartItem);
      if (!found) {
        this.cart.splice(i, 1);
      }
      // update cartItems in this.cart this have a different qty in cartFromServer
      else if (cartItem.qty !== found.qty) {
        cartItem.qty = found.qty;
      }
    }
  }

  getArt() {
    this.itemService.getItems().then((json) => {
      this.art = json.data;
    });
  }

  addItem(item) {
    this.cartService.addItem(item).then((json) => {
      this.updateCartFromServer(json.data);
    }, function(err) {
      console.log('ERROR: addItem: ' + JSON.stringify(err));
    });
  }

  removeItem(item) {
    this.cartService.removeItem(item).then((json) => {
      this.updateCartFromServer(json.data);
    }, function(err) {
      console.log('ERROR: removeItem: ' + JSON.stringify(err));
    });
  }

  getCost(item) {
    return this.cartService.getCost(item);
  }

  clearCart() {
    return this.cartService.clearCart().then((json) => {
      this.updateCartFromServer(json.data);
    }, function(err) {
      console.log('clearCart delete ERROR: ' + JSON.stringify(err));
    });
  }

  goItem(item) {
    this.$state.go('itemDetail', {
      itemId: item._id
    });
  }

  getTotal() {
    return this.cartService.getTotal(this.cart);
  }
}

angular.module('project4App')
  .component('items', {
    templateUrl: 'app/items/items.html',
    controller: ItemsComponent
  });

})();
