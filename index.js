const user = {
  name: "Matheus",
  message: function () {
    console.log(`Hello, ${this.name}!`)
  },
}

user.message()