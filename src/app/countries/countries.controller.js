(function () {
    'use strict';

    angular
        .module('cncApp')
        .controller('CountriesCtrl', CountriesCtrl);

    CountriesCtrl.$inject = ['dataservice', '$location'];

    function CountriesCtrl(dataservice, $location) {
        var vm = this;
        vm.getCountries = getCountries;
        vm.showCountry = showCountry;
        vm.countryList = [];
        vm.title = 'Countries';
        activate();

        function activate() {
            return getCountries();
        }

        function getCountries() {
            return dataservice.getCountries()
                .then(function(data){
                    for (var i = 0, len = data.geonames.length; i < len; i++) {
                        vm.countryList.push({
                          countryName: data.geonames[i].countryName,
                          countryCode: data.geonames[i].countryCode,
                          capital: data.geonames[i].capital,
                          areaInSqKm: data.geonames[i].areaInSqKm,
                          population: data.geonames[i].population,
                          continent: data.geonames[i].continent
                        });
                    }
                });
        }

        function showCountry(countyObj){
          $location.path('/countries/' + countyObj.countryCode + '/capital');

          console.log(countyObj);
        }
    }
})();
