'use strict';

angular.module('project4App')
  .filter('fineFilter', function() {
    function isMatch(str, pattern) {
      return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
    }

    return function(inventory, searchText) {
      var fines = {
        searchText: searchText,
        out: []
      };
      angular.forEach(inventory, function (fine) {
        if (isMatch(fine.category   , this.searchText) ||
            isMatch(fine.title      , this.searchText) ) {
          this.out.push(fine);
        }
      }, fines);
      return fines.out;
    };
  });
