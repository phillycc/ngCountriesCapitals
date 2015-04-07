(function () {
    'use strict';

    angular
        .module('geoNamesAPI', [])
        .constant('GN_COUNTRIES',  'http://api.geonames.org/countryInfoJSON?username=davelmer')
        .constant('GN_NEIGHBOURS', 'http://api.geonames.org/neighboursJSON?geonameId={{ APIcountryid }}&username=davelmer')
        .factory('geodataservice', geodataservice);

    geodataservice.$inject = ['$http', '$q', '$interpolate', 'GN_COUNTRIES', 'GN_NEIGHBOURS'];

    function geodataservice($http, $q, $interpolate, GN_COUNTRIES, GN_NEIGHBOURS) {

        var service = {
            geoCountries: geoCountries,
            geoNeighbors: geoNeighbors,
            geoCapitalSize: geoCapitalSize,
            geoFlag: geoFlag,
            geoMap: geoMap,
            neighboursList: [],
            countries: []
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

        function geoNeighbors(countryid){

          var neighboursURL = $interpolate(GN_NEIGHBOURS);
          neighboursURL=neighboursURL({ APIcountryid : countryid });

          return $http.get(neighboursURL)
              .then(success)
              .catch(fail);

          function success(response) {
              service.neighboursList = response.data;
          }

          function fail(error) {
              var msg = 'query for neighbours failed. ' + error.data.description;
              //console.log(error.data.description);

              //logger.error(msg);
              return $q.reject(msg);
          }
        }

        function geoCapitalSize(){

        }

        function geoFlag(){

        }

        function geoMap(){

        }
    }
})();
