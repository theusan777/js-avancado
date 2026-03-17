let date = new Date("2026-03-17T12:00:00")

console.log(date.toLocaleString())
console.log(date.toLocaleDateString("en"))

console.log(
  date.toLocaleDateString("pt-BR", {
    dateStyle: "short"
  })
)

console.log(
  date.toLocaleDateString("pt-BR", {
    dateStyle: "long"
  })
)

console.log(
  date.toLocaleDateString("pt-BR", {
    dateStyle: "medium"
  })
)

console.log(
  date.toLocaleDateString("pt-BR", {
    dateStyle: "full"
  })
)


console.log(date.toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit"
}))

let amount = 14.5

console.log(amount.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
}))
