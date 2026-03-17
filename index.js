let date = new Date("2026-03-17T12:00:00Z")

date.setDate(date.getDate() + 10)

date.setMonth(date.getMonth() + 6)

date.setFullYear(date.getFullYear() + 2)

date.setHours(date.getHours() + 1)

date.setMinutes(date.getMinutes() + 30)

date.setSeconds(date.getSeconds() + 45)


console.log(date.toISOString())






