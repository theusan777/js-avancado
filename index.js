const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)

console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))
console.log(new Intl.DateTimeFormat("pt-BR", { dateStyle: "full" }).format(new Date()))
console.log(new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date()))

const date = new Date()

console.log(date.getTimezoneOffset())
console.log(date.getTimezoneOffset() / 60)



