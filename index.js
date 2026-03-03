const user = {
  id: 1,
  name: "Matheus",
  // address: {
  //   street: "Rua dos Bobos",
  //   city: "São Paulo",
  //   geo: {
  //     lat: -23.55052,
  //     lng: -46.633308,
  //   },
  // },
  // message: function () {
  //   console.log(`Olá, ${this.name}!`);
  // },
}

console.log(user?.address?.street)

user?.message?.()