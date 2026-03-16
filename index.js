let person = {
  name: "John",
  surname: "Doe",
  email: "john.doe@example.com",
}

for (let property in person) {
  console.log(property + ": " + person[property]);
}
