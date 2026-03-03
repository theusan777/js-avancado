const product = {
  name: "controle",
  price: 299.99,
}

console.log(product.price)
product.price = 249.99
console.log(product.price)

console.log(product.name)
product.name = "controle ps5"
console.log(product.name)

product["price"] = 199.99
console.log(product)
