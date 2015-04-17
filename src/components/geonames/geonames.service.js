(function () {
    'use strict';

    angular
        .module('geoNamesAPI', [])
        .constant('GN_COUNTRIES',  'http://api.geonames.org/countryInfoJSON?username=davelmer')
        .constant('GN_NEIGHBOURS', 'http://api.geonames.org/neighboursJSON?geonameId={{ geonameId }}&username=davelmer')
        .constant('GN_FLAG', 'http://www.geonames.org/img/country/250/{{ geoCountryCode }}.png')
        .factory('geodataservice', geodataservice);

    geodataservice.$inject = ['$http', '$q', '$interpolate', 'GN_COUNTRIES', 'GN_NEIGHBOURS'];

    function geodataservice($http, $q, $interpolate, GN_COUNTRIES, GN_NEIGHBOURS) {

        var service = {
            geoCountries: geoCountries,
        };

        return service;

        function geoCountries() {
            return $http.get(GN_COUNTRIES)
                .then(success)
                .catch(fail);

            function success(response) {
                service.countries = response.data;
                return response.data;
            }

            function fail(error) {
                var msg = 'query for country failed. ' + error.data.description;
                //logger.error(msg);
                return $q.reject(msg);
            }
        }
    }
})();
