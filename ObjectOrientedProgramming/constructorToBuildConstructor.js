function Car (make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function Motorcycle (make, model, year){
  Car.apply(this, arguments);  //uses the "this" created by new
  this.numWheels = 2;
  this.args = arguments;
  this.printArgs = function(){console.log(this.args)}

}

var myHog = new Motorcycle("Harley", 'Chopper', '2015');

console.log(myHog);
myHog.printArgs();
