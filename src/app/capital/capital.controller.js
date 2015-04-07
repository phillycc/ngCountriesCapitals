(function () {
    'use strict';

    angular
        .module('cncApp')
        .controller('CapitalCtrl', CapitalCtrl);

    CapitalCtrl.$inject = ['neighbors'];

    function CapitalCtrl(neighbors) {
        console.log(neighbors);
    }
})();
