'use strict';

angular.module('project4App')
  .service('cartService', function ($http, Auth) {

    var that = this;

    that.getCart = function() {
      var userId = Auth.getCurrentUser()._id;
      return $http.get('/api/users/' + userId + '/cart/');
    };

    that.addItem = function(item) {
      var userId = Auth.getCurrentUser()._id;
      return $http.post('/api/users/' + userId + '/cart/' + item._id);
    };

    that.addFine = function(fine) {
      var userId = Auth.getCurrentUser()._id;
      return $http.post('/api/users/' + userId + '/cart/' + fine._id);
    };

    that.removeItem = function(cartItem) {
      var userId = Auth.getCurrentUser()._id;
      return $http.delete('/api/users/' + userId + '/cart/' + cartItem._id);
    };

    that.removeFine = function(cartFine) {
      var userId = Auth.getCurrentUser()._id;
      return $http.delete('/api/users/' + userId + '/cart/' + cartFine._id);
    };

    that.getCost = function(cartItem) {
      return cartItem.qty * cartItem.item.price;
    };

    // that.getCost = function(cartFine) {
    //   return cartFine.qty * cartFine.fine.price;
    // };

    that.getTotal = function(cart) {
      var total = _.reduce(cart, function(sum, cartItem) {
        return sum + that.getCost(cartItem);
      }, 0);
      return total;
    };

    that.getTotal = function(cart) {
      var total = _.reduce(cart, function(sum, cartFine) {
        return sum + that.getCost(cartFine);
      }, 0);
      return total;
    };

    that.clearCart = function() {
      var userId = Auth.getCurrentUser()._id;
      return $http.delete('/api/users/' + userId + '/cart/');
    };
  });


