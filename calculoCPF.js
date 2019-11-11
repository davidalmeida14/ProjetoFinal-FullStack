
var cpfValidar = "03969905842"
console.log("Validando primeiro dígito...")

console.log("Resultado: " + validarPrimeiroDigito(cpfValidar))

console.log("Validando segundo dígito")
console.log("Resultado:" + validarSegundoDigito(cpfValidar))

function validarPrimeiroDigito (cpfValidar) {
    resultado = 0
    const INDCICE_MAXIMO = 9
    soma = 0
    valorMaximoMultiplicar = 10
    valorMinimoMultipllicar = 2
    tamanho = cpfValidar.lenght
    valorMultiplicado = 0
    for(i = 0; i < INDCICE_MAXIMO; i ++) {
       valorMaximoMultiplicar = valorMaximoMultiplicar - 1 
       if(valorMaximoMultiplicar <= valorMinimoMultipllicar) {
            valorMultiplicado = parseInt(cpfValidar[i]) * parseInt(valorMaximoMultiplicar)
            soma = soma + valorMultiplicado
       } 
    }
    resto = (soma * 10) % 11
    
    if(resto == 10 || resto == 11) {
      resultado = 0
    } else {
      resultado = resto
    }
    return resultado
}


function validarSegundoDigito (cpfValidar) {
    resultado = 0
    const INDCICE_MAXIMO = 10
    soma = 0
    valorMaximoMultiplicar = 11
    valorMinimoMultipllicar = 2
    tamanho = cpfValidar.lenght
    valorMultiplicado = 0
    for(i = 0; i < INDCICE_MAXIMO; i ++) {
       valorMaximoMultiplicar = valorMaximoMultiplicar - 1 
       if(valorMaximoMultiplicar <= valorMinimoMultipllicar) {
            valorMultiplicado = parseInt(cpfValidar[i]) * parseInt(valorMaximoMultiplicar)
            soma = soma + valorMultiplicado
       } 
    }
    resto = (soma * 10) % 11
    
    if(resto == 10 || resto == 11) {
      resultado = 0
    } else {
      resultado = resto
    }
    return resultado
}

function validarNumeroCompleto(cpfValidar) {
  
  INDCICE_MAXIMO
}
