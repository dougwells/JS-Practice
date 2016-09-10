var House = function(numBedrooms, numBathrooms, numSqFt){
  this.bedrooms = numBedrooms;
  this.bathrooms = numBathrooms;
  this.numSqFt = numSqFt;
}

var house1 = House;
console.log(house1);


var house2 = new House(4,2,3000);
console.log(house2);
