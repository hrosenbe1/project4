'use strict';

import _ from 'lodash';
import CartItem from './cartitem.model';
import Item from '../item/item.model';
import CartFine from './cartfine.model';
import Fine from '../fine/fine.model';
import User from '../user/user.model';

function findItemInCart(user, id) {
  // _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  return _.find(user.cart, function(cartItem) {
    // return cartItem.item === id;    // does not work!
    console.log('Comparing ' + cartItem.item + ' to ' + id);
    return cartItem.item.equals(id) || cartItem._id.equals(id);
  });
}

// Get the cart from the DB.
exports.get = function(req, res) {
  console.log('get, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  User.findById(userId)
  .populate('cart.item')
  .exec(function(err, user) {
    // console.log('user: ' + user.name);
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }
    console.log('returning cart: ' + JSON.stringify(user.cart));
    res.json(200, user.cart);
  });
};

// Add a new item to the cart or update the qty and return the cart.
exports.addItem = function(req, res) {
  console.log('addItem, url = ' + req.url);
  var userId = req.params.userid.trim();
  var itemId = req.params.itemid.trim();
  console.log('userId: ' + userId + ', itemId: ' + itemId);

  Item.findById(itemId, function(err, item) {
    if (err) { return handleError(res, err); }
    if (!item) { return res.send(404); }
    User.findById(userId, function(err, user) {
      if (err) { return handleError(res, err); }
      if (!user) { return res.send(404); }

      // Check if item is already in cart
      var found = findItemInCart(user, item._id);
      if (found) {
        console.log('Found item ' + item.name + ' in cart, therefore incrementing qty');
        found.qty = found.qty + 1;
      }
      else {
        console.log('Adding item to cart: ' + item.name);
        user.cart.push( new CartItem( { item: item, qty: 1 } ) );
      }
      user.save(function() {
        user.populate('cart.item', function(err, user) {
          return res.json(201, user.cart );
        });
      });
    });
  });
};

// Remove an item from the cart and return the cart.
exports.removeItem = function(req, res) {
  console.log('removeItem, url = ' + req.url);
  var userId = req.params.userid;
  var cartItemId = req.params.itemid;
  console.log('userId: ' + userId + ', cartItemId: ' + cartItemId);

  // Remove the item, get the updated cart, and return the cart
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    // Check if item is already in cart
    var found = findItemInCart(user, cartItemId);
    if (found) {
      console.log('Removing item from cart');
      user.cart.pull(found._id);               // pull is a feature of MongooseArray!
    }
    else {
      return res.send(404);
    }
    user.save(function() {
      user.populate('cart.item', function(err, user) {
        return res.json(201, user.cart );
      });
    });
  });
};

// Remove all items from the cart in the DB.
exports.removeAllItems = function(req, res) {
  console.log('removeAllItems, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  // remove all items from cart and return the cart
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    user.cart = [];
    user.save(function() {
      user.populate('cart.item', function(err, user) {
        return res.send(204, user.cart);
      });
    });
  });
}

function handleError(res, err) {
  return res.send(500, err);
}



function findFineInCart(user, id) {
  // _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  return _.find(user.cart, function(cartFine) {
    // return cartItem.item === id;    // does not work!
    console.log('Comparing ' + cartFine.fine + ' to ' + id);
    return cartFine.fine.equals(id) || cartFine._id.equals(id);
  });
}

// Get the cart from the DB.
exports.get = function(req, res) {
  console.log('get, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  User.findById(userId)
  .populate('cart.fine')
  .exec(function(err, user) {
    // console.log('user: ' + user.name);
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }
    console.log('returning cart: ' + JSON.stringify(user.cart));
    res.json(200, user.cart);
  });
};

// Add a new item to the cart or update the qty and return the cart.
exports.addFine = function(req, res) {
  console.log('addFine, url = ' + req.url);
  var userId = req.params.userid.trim();
  var fineId = req.params.fineid.trim();
  console.log('userId: ' + userId + ', fineId: ' + fineId);

  Fine.findById(fineId, function(err, fine) {
    if (err) { return handleError(res, err); }
    if (!fine) { return res.send(404); }
    User.findById(userId, function(err, user) {
      if (err) { return handleError(res, err); }
      if (!user) { return res.send(404); }

      // Check if item is already in cart
      var found = findFineInCart(user, fine._id);
      if (found) {
        console.log('Found item ' + fine.name + ' in cart, therefore incrementing qty');
        found.qty = found.qty + 1;
      }
      else {
        console.log('Adding item to cart: ' + fine.name);
        user.cart.push( new CartFine( { fine: fine, qty: 1 } ) );
      }
      user.save(function() {
        user.populate('cart.fine', function(err, user) {
          return res.json(201, user.cart );
        });
      });
    });
  });
};

// Remove an item from the cart and return the cart.
exports.removeFine = function(req, res) {
  console.log('removeItem, url = ' + req.url);
  var userId = req.params.userid;
  var cartFineId = req.params.fineid;
  console.log('userId: ' + userId + ', cartFineId: ' + cartFineId);

  // Remove the item, get the updated cart, and return the cart
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    // Check if item is already in cart
    var found = findFineInCart(user, cartFineId);
    if (found) {
      console.log('Removing item from cart');
      user.cart.pull(found._id);               // pull is a feature of MongooseArray!
    }
    else {
      return res.send(404);
    }
    user.save(function() {
      user.populate('cart.fine', function(err, user) {
        return res.json(201, user.cart );
      });
    });
  });
};

// Remove all items from the cart in the DB.
exports.removeAllFines = function(req, res) {
  console.log('removeAllItems, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  // remove all items from cart and return the cart
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    user.cart = [];
    user.save(function() {
      user.populate('cart.fine', function(err, user) {
        return res.send(204, user.cart);
      });
    });
  });
}

function handleError(res, err) {
  return res.send(500, err);
}

