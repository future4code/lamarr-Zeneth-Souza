//Exercicios de interpretação de código
//1 - Será impresso nome e apelido de cada uma das pessoas.
//2 - Será impresso apenas os nomes e irá acessar cada elemento.
//3 - Será impresso apenas os nomes de Amanda e Lais que são diferentes de Leticia

//************************Exercicios de Escrita de código******************************/
  
  // 1 - 
  
 /*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},*/
 
   //Item A 
   /*const nomesPets = pets.map((item) => {
       return item.nome
   })
   console.log(nomesPets)*/

   //Item B

     /* const nomePets = pets.filter((item) => {
        return item.raca === "Salsicha"
    })
     console.log(nomePets)*/

   //Item C
   
    /*const petsPoodle = pets.filter((item) => {
        return item.raca === "Poodle"
    }).map((item) => {
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}! `
    })
    console.log(petsPoodle)*/
   //******************************************Exercicio 2******************************************************/  
   
   /*const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }*/
 ]
    //Item A
    /*const nomesProdutos = produtos.map((item) => {
       return item.nome
   })
   console.log(nomesProdutos)*/
   
   //Item B
       
   /*const arrayProdutos = produtos.map((item) => {
    return [item.nome, (item.preco - (item.preco / 20)).toFixed(2)]

})
console.log(arrayProdutos)*/

  //Item C
    
     /*function filtrarPorCategoria(produtos) {
         return produtos.categoria ==="Bebidas"
     }
      let produtosBebidas=produtos.filter(filtrarPorCategoria)
      console.log(produtosBebidas)*/
   
    
  //Item D

    /*const filtrarYpe = produtos.filter((item) => {
       return item.nome.includes("Ypê")
    })
       console.log(filtrarYpe)

   //Item E
   
    const filtrarPreco = filtrarYpe.map((item) => {
        return `Compre ${nome} , por ${preco}`    
    })
    console.log(filtrarPreco)*/
  