'use strict';

describe('Unit Tests: geoNames Dataservice', function () {
  beforeEach(module('geoNamesAPI.geodataservice'));
  var PostsSvc;

  beforeEach(inject(function(_PostsSvc_) {
    PostsSvc = _PostsSvc_;
  }));

  describe('geoCountries', function() {
    it('exists', function() {
      expect(PostsSvc.geoCountries).to.exist;
    });
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
        geonames[0].areaInSqKm='468.0';
        geonames[0].capital='Andorra la Vella';
        geonames[0].continent='EU';
        geonames[0].continentName='Europe';
        geonames[0].countryCode='AD';
        geonames[0].countryName='Andorra';
        geonames[0].currencyCode='EUR';
        geonames[0].east='1.7865427778319827';
        geonames[0].fipsCode='AN';
        geonames[0].geonameId='3041565';
        geonames[0].isoAlpha3='AND';
        geonames[0].isoNumeric='020';
        geonames[0].languages='ca';
        geonames[0].north='42.65604389629997';
        geonames[0].population='84000';
        geonames[0].south='42.42849259876837';
        geonames[0].west='1.4071867141112762';
      );

      geoFactory = geoCountriesService;
    }));

    var countriesList;

    it('should retrieve the countries list', function(){
      console.log(geoFactory);
    });
});*/
