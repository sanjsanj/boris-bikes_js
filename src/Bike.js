var Bike = function(){
  this._isBroken = false;
};

Bike.prototype.isBroken = function(){
  return this._isBroken;
};

Bike.prototype.break = function(){
  this._isBroken = true;
};

Bike.prototype.fix = function(){
  if (this._isBroken === true){
    this._isBroken = false;
  } else {
    throw 'Bike not broken';
  };
};
