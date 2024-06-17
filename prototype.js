function Animal(name) {
	this.name = name;
  }
  
  Animal.prototype.speak = function() {
	console.log(this.name + ' makes a sound');
  };
  
  function Dog(name) {
	Animal.call(this, name); // Call the Animal constructor
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  const dog = new Dog('Buddy');
  dog.speak(); // Output: Buddy makes a sound
  