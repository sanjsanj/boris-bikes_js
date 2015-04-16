describe('Bike Unit Test', function() {

  var bike;

  beforeEach(function(){
    bike = new Bike
  });

  describe('New bike is', function() {

    it('not broken',function(){
      expect(bike.isBroken()).toBe(false);
    });

  });

});
