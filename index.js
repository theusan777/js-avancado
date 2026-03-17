let date = new Date("2026-03-17T12:00:00")

console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
console.log(date.toLocaleString())

console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleDateString("en-GB"))
console.log(date.toLocaleDateString("en-US"))
console.log(date.toLocaleDateString("en", { weekday: "long" }))
console.log(date.toLocaleDateString("en", { month: "long" }))
console.log(date.toLocaleDateString("en", { year: "2-digit" }))



