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

}

const dog = new Dog("Rex", "Canis lupus")
dog.makeSound()
