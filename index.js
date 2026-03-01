const obj = {}
console.log(obj)
console.log(typeof obj)

const user = {
  email: "matheus@email.com",
  age: 21,
  name: {
    first_name: "Matheus",
    surnme: "Santos"
  }, 

  address: {
    street: "Rua Z",
    number: 23,
    city: "São Paulo",
    postal_code: "12345-552"
  }, 

  message: function(){
    console.log("Oi, Matheus");
    
  }
  
}

 console.log(user);
 console.log(user.email);
 console.log(user.name.first_name);
 user.message()
 console.log(user["age"]);
 
 
 