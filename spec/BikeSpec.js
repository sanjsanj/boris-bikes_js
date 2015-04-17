describe('Bike Unit Test', function() {

  var bike;

  beforeEach(function(){
    bike = new Bike
  });

  describe('New bike is', function(){

    it('not broken',function(){
      expect(bike.isBroken()).toBe(false);
    });
  });

  describe('Bike can', function(){

    it('be broken', function(){
      bike.break();
      expect(bike.isBroken()).toBe(true);
    });

    it('be fixed if broken', function(){
      bike.break();
      bike.fix();
      expect(bike.isBroken()).toBe(false);
    });

    it('not be fixed if not broken', function(){
      expect(function(){bike.fix()}).toThrow('Bike not broken');
    });
  });

});
