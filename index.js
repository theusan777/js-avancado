class MyCustomError {
  constructor(message) {
    this.message = "CLASSE DE ERRO PERSONALIZADA: " + message;
  }
}

try {
  throw new MyCustomError("Este é um erro personalizado!")
} catch (error) {
  if (error instanceof MyCustomError) {
    console.log(error.message)
  } else {
    console.error('Erro inesperado:', error.message)
  }
}