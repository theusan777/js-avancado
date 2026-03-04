const creditCard = "1234 5678 9012 3456"
console.log(creditCard.length)

const lastFourDigits = creditCard.slice(-4)
console.log(lastFourDigits)

const maskedCreditCard = creditCard.slice(0, -4).replace(/\d/g, "*") + lastFourDigits
console.log(maskedCreditCard)

const maskedNumber = lastFourDigits.padStart(creditCard.length, "*")
console.log(maskedNumber)

const number = "1234"
console.log(number.padEnd(8, "$"));

