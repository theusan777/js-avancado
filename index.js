let fruits = ["apple", "banana", "cherry"]

let position = fruits.indexOf("banana")
console.log(position) 

let position2 = fruits.indexOf("grape")
console.log(position2)

fruits.splice(1, 2)
console.log(fruits)