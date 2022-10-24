const livros = require('./listaLivro') // buscando o  arquivo com o require o objeto do arquivo listaLivro e passando para uma const.

let maisBarato = 0; 

for (let atual = 0; atual < livros.length; atual++){
    // codigo  
    if (livros[atual].preco < livros[maisBarato].preco) { // verifica se os valores são menores com o menor achado dentro do objeto livros
        maisBarato = atual // guarda o menor valor encontrado dentro indice buscado dentro do objeto
    }
} 

console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].titulo}`)

