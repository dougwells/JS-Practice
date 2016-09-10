function Dog (name, age){
  this.name = name;
  this.age = age;
  this.bark = function(){console.log(name, 'just barked')}
}

var rusty = new Dog('Rusty', 3);
var fido = new Dog('Fido', 5);

rusty.bark()
