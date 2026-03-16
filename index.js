let execute = true 

while (execute) {
    let response = prompt("Deseja continuar? 1 (sim) ou 2 (não)")
    
    if (response === "2") {
      execute = false
    }
}

console.log("Programa encerrado.")