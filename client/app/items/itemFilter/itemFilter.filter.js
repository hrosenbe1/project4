'use strict';

angular.module('project4App')
  .filter('itemFilter', function() {
    function isMatch(str, pattern) {
      return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
    }

    return function(inventory, searchText) {
      var items = {
        searchText: searchText,
        out: []
      };
      angular.forEach(inventory, function (item) {
        if (isMatch(item.category   , this.searchText) ||
            isMatch(item.title       , this.searchText) ) {
          this.out.push(item);
        }
      }, items);
      return items.out;
    };
  });
