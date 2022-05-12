/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */ 
    console.log( "Boas vindas ao jogo de blackjack!")
    
    if (confirm("Quer iniciar uma nova rodada?")) {
      carta1 = comprarCarta()
      carta2 = comprarCarta()
      carta3 = comprarCarta()
      carta4 = comprarCarta()
      
      arrayUsuario.push(comprarCarta(), comprarCarta())
      arrayComputador.push(comprarCarta(), comprarCarta())
      const maoUsuario = arrayUsuario.map((item, index, array) => {
         return item.texto
      })
      const valorUsuario = arrayUsuario.map((item, index, array) =>{
         return item.texto
      })
      const maoComputador = arrayComputador.map((item, index, array) => {
         return item.texto
      })
      const valorComputador = arrayComputador.map((item, index, array) => {
         return item.valor
      })
       
      valorUsuarioTotal = valorUsuario[0] + valorUsuario[1]
      valorComputadorTotal = valorComputador[0] + valorComputador[1]
   
      console.log(`Usuario: Cartas: ${maoUsuario}. Pontuação: ${valorUsuarioTotal}. Computador: Cartas: ${maoComputador}. Pontuação: ${valorComputador}`)
      if(valorUsuarioTotal > valorComputadorTotal) {
         console.log ("O Usuario venceu!")}else if(valorUsuarioTotal < valorComputador){
         console.log("O computador venceu!")   
         } else if(valorUsuarioTotal = valorComputadorTotal){
            console.log ("Empate!!!!")
         }
      } else {console.log ("O jogo acabou")
   }

