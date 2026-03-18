let obj = []

try {
  if (!obj.includes(17)) {
    throw new Error('17 is not included in the array')
  }
} catch (error) {
  if (error instanceof TypeError) {
    console.error('TypeError:', error.message)
  }
 console.log(error)
}
 