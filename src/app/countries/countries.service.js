(function () {
    'use strict';

    angular
        .module('cncApp')
        .constant('GEONAMES_API', 'http://api.geonames.org/countryInfoJSON?username=davelmer')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'GEONAMES_API'];

    function dataservice($http, $q, GEONAMES_API) {
        var service = {
            getCountries: getCountries
        };

        return service;

        function getCountries() {
            return $http.get(GEONAMES_API)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                var msg = 'query for people failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }
        }


        /*function getCountries() {
            return $http({method: 'GET', url: 'GEONAMES_API'}).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log(status);
                    console.log(data);
                    //return data;
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log(status);
                });
        }*/
    }
})();
