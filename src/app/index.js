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
              var defer = $q.defer();

              geodataservice.geoNeighbors(geonameid).then(function() {
                return defer.resolve(geodataservice.neighboursList);
              });

              return defer.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
