let myArray = [
  "Hello",
  10,
  true,
  function() {    
    console.log("This is a function inside an array.")
  },
  { 
    name: "ycario", 
    age: 30 
  },
]

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
myArray[3]()
console.log(myArray[4].name)
console.log(myArray[4].age)
