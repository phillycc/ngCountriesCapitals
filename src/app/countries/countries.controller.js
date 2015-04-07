(function () {
    'use strict';

    angular
        .module('cncApp')
        .controller('CountriesCtrl', CountriesCtrl);

    CountriesCtrl.$inject = ['geodataservice', '$location'];

    function CountriesCtrl(geodataservice, $location) {
        var vm = this;
        vm.geoCountries = geoCountries;
        vm.showCountry = showCountry;
        vm.countryList = [];
        vm.title = 'Countries';
        activate();

        function activate() {
            return geoCountries();
        }

        function geoCountries() {
            return geodataservice.geoCountries()
                .then(function(data){
                    for (var i = 0, len = data.geonames.length; i < len; i++) {
                        vm.countryList.push({
                          geonameId: data.geonames[i].geonameId,
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
          $location.path('/countries/' + countyObj.geonameId + '/capital');
        }
    }
})();
