'use strict';

angular.module('cncApp', ['ngAnimate', 'ngRoute'])
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
      .when('/countries/:country/capital', {
        templateUrl: 'app/capital/capital.html',
        controller: 'CapitalCtrl as vm',
        resolve : {
            neighbors: function($route, $location) {
                var country = $route.current.params.country;
                return country;
            }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
