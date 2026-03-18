class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("Som genérico do animal")
    
  }
}

class Dog extends Animal{
  makeSound() {
    console.log("Woof! Woof!")
  }
}

const dog = new Dog("Rex", "Canis lupus")
dog.makeSound()


class Cat extends Animal{
  makeSound() {
    console.log("Meow! Meow!")
  }
}

const cat = new Cat("Whiskers", "Felis catus")
cat.makeSound()
