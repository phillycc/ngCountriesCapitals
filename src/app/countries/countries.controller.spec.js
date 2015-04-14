'use strict';

describe('Countries List', function(){
  beforeEach(module('cncApp'));
  var ctrl, data;
  beforeEach(inject(function($controller, $location) {
      ctrl = $controller('CountriesCtrl', {
          geodataservice : { geoCountries : function(){
            return {
              then : function(callback){
                data={};
                data.geonames=[];
                data.geonames[0]={};
                data.geonames[0].geonameId='1';
                data.geonames[0].countryName='2';
                data.geonames[0].countryCode='3';
                data.geonames[0].capital='4';
                data.geonames[0].areaInSqKm='5';
                data.geonames[0].population='6';
                data.geonames[0].continent='7';
                callback(data);
              }
            }
          } },
          $location : $location
      });
  }));

  it('should have a CountriesCtrl controller', function() {
    expect(ctrl).toBeDefined();
  });

  it('should get a list of countries', function() {
    expect(ctrl.geoCountries());
    expect(ctrl.countryList).toEqual([Object({ geonameId: '1', countryName: '2', countryCode: '3', capital: '4', areaInSqKm: '5', population: '6', continent: '7' }), Object({ geonameId: '1', countryName: '2', countryCode: '3', capital: '4', areaInSqKm: '5', population: '6', continent: '7' })]);
  });

});
