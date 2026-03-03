function createProduct(name) {
  const product = {}

  product.name = name
  product.details = function() {
    console.log(`O nome do produto é ${this.name}`)
  }

  return product
}

const product1 = new createProduct("teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("mouse")
console.log(product2.name)
product2.details()


function Person(name) {
  this.name = name
  this.message = function() {
    console.log(`Olá, meu nome é ${this.name}`)
  }
}

const person1 = new Person("Karina")
console.log(person1.name)
person1.message()

const person2 = new Person("Matheus")
console.log(person2.name)
person2.message()