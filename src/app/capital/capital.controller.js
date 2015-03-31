(function () {
    'use strict';

    angular
        .module('cncApp')
        .controller('CapitalCtrl', CapitalCtrl);

    CapitalCtrl.$inject = ['neighbors'];

    function CapitalCtrl(neighbors) {
        console.log(neighbors);

        /*var vm = this;
        vm.showCountry = showCountry;
        vm.countryData = [];
        vm.title = 'Country Data';
        //activate();

        /*function activate() {
            return getCountries();
        }*/

        /*function showCountry(countyObj){
            console.log(countyObj);
            //get countryID --> countryCode

            //call datservice

            //handle route

        }*/

        /*function getCountries() {
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
        }*/


    }
})();
