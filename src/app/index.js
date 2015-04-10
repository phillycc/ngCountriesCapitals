'use strict';

angular.module('cncApp', ['geoNamesAPI', 'ngAnimate', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/countries', {
        templateUrl: 'app/countries/countries.html',
        controller: 'CountriesCtrl as vm'
      })
      .when('/countries/:geonameid/capital', {
        templateUrl: 'app/capital/capital.html',
        controller: 'CapitalCtrl as vm',
        resolve : {
            neighbors : function(geodataservice, $route, $q) {
              var geonameid = $route.current.params.geonameid;
              var deferNeighbor = $q.defer();

              geodataservice.geoNeighbors(geonameid).then(function() {
                return deferNeighbor.resolve(geodataservice.neighboursList);
              });

              return deferNeighbor.promise;
            }
            /*,
            flag : function(geodataservice, $route, $q) {
              var countryCode = $route.current.params.countryCode;
              var deferFlag = $q.defer();

              geodataservice.geoNeighbors(countryCode).then(function() {
                return deferFlag.resolve(geodataservice.geoflag);
              });

              return deferFlag.promise;
            }*/
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
