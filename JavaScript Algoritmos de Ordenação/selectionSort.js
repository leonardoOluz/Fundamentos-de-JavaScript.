const livros = require('./listaLivro');
const menorValor = require('./menorValor');
const troca1 = require("./troca1");


for (let atual = 0; atual < livros.length - 1; atual++) {// o for passa por cada indice da lista de objetos
    let menor = menorValor(livros, atual)// a função vai retornar de dentro do objeto o indice do menor valor comparado com as propriedade preco
    troca1(atual, menor)
}
console.log(livros)





/* livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
    troca1(indice, menor);
})

console.log(livros) */






// console.log(livros)



// console.log('posição menor preco ', menor)// imprimir a posição menor
// console.log('livro menor preco ', livros[menor])// imprime a propriedade de menor preço

