// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b)=> a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  function pares (array) {
    return array % 2 === 0
  }
  let soNumerosPares = array.filter (pares)
   return soNumerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let novoArray = []
    const par = array.filter((array) => (array % 2 === 0))
    for (numero of par) {
        let elevado = numero*numero
        novoArray.push(elevado)
    } return novoArray
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let  retornaMaiorNumero
  let divisao
  let diferenca
   if(num1>num2) {
     maiorNum= num1
     divisao= num1 % num2 === 0
     diferenca= num1 - num2
   }else {
     maiorNum= num2
     divisao= num2 % num1 === 0
     diferenca= num2 - num1
   }
  numeros = {
    maiorNumero: maiorNum,
    maiorDivisivelPorMenor: divisao,
    diferenca: diferenca
  }
  return numeros
} 

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    
    if (ladoA !== ladoB && ladoA !==ladoC && ladoB !== ladoC ) {
      return (`Escaleno`)}
     else if (ladoA === ladoB && ladoB === ladoC){
      return (`Equilátero`)}
    else {
      return (`Isósceles`)
    }
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}