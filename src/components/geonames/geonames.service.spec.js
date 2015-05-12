'use strict';

describe("geoNames service", function() {
    beforeEach(function(){
        module('geoNamesAPI');
    });

    var service, httpBackend, geonames;

    beforeEach(inject(function($injector, _geodataservice_){
        service = $injector.get('geodataservice');
        httpBackend = $injector.get('$httpBackend');
    }));

    it('should return a list of countries', function(){
      var responseData = {
        data:{
            'areaInSqKm':'468.0',
            'capital':'Andorra la Vella',
            'continent':'EU',
            'continentName':'Europe',
            'countryCode':'AD',
            'countryName':'Andorra',
            'currencyCode':'EUR',
            'east':'1.7865427778319827',
            'fipsCode':'AN',
            'geonameId':'3041565',
            'isoAlpha3':'AND',
            'isoNumeric':'020',
            'languages':'ca',
            'north':'42.65604389629997',
            'population':'84000',
            'south':'42.42849259876837',
            'west':'1.4071867141112762'
        }
      };
      httpBackend.when('GET', 'http://api.geonames.org/countryInfoJSON?username=davelmer').respond(responseData);
      service.geoCountries();
      httpBackend.flush();
      expect(service.countries).toEqual(responseData);
    });

    it('should fail gracefully', function(){
      var responseData = {
        data: { description: 'my description' }
      };
      httpBackend.when('GET', 'http://api.geonames.org/countryInfoJSON?username=davelmer').respond(500, responseData);
      service.geoCountries();
      httpBackend.flush();
    });
});


/*describe('Unit Tests: geoNames Dataservice', function() {
    beforeEach(module('geoNamesAPI.geodataservice'));

    var geoFactory, httpMock, geonames;

    beforeEach(inject(function($httpBackend, geoCountriesService){
      httpMock = $httpBackend;
      httpMock.when('GET', 'http://api.geonames.org/countryInfoJSON?username=davelmer').respond(
        geonames=[];
        geonames[0]={};
        'areaInSqKm='468.0';
        'capital='Andorra la Vella';
        'continent='EU';
        'continentName='Europe';
        'countryCode='AD';
        'countryName='Andorra';
        'currencyCode='EUR';
        'east='1.7865427778319827';
        'fipsCode='AN';
        'geonameId='3041565';
        'isoAlpha3='AND';
        'isoNumeric='020';
        'languages='ca';
        'north='42.65604389629997';
        'population='84000';
        'south='42.42849259876837';
        'west='1.4071867141112762';
      );

      geoFactory = geoCountriesService;
    }));

    var countriesList;

    it('should retrieve the countries list', function(){
      console.log(geoFactory);
    });
});*/
