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
            neighbors : function(geodataservice, $route) {
                var geonameid = $route.current.params.geonameid;
                //console.log(geodataservice.countries.geonames[countryIndex]);
                geodataservice.geoNeighbors(geonameid).success(function(){
                  
                });
                //return geoNeighbors(country);
            }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
