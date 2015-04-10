(function () {
    'use strict';

    angular
        .module('cncApp')
        .controller('CapitalCtrl', CapitalCtrl);

    CapitalCtrl.$inject = ['neighbors'];

    function CapitalCtrl(neighbors) {

      //neighbors
      for (var i = 0, totalNeighbors = neighbors.totalResultsCount; i < totalNeighbors; i++){
        console.log(neighbors.geonames[i].countryName);
      }

    }
})();
