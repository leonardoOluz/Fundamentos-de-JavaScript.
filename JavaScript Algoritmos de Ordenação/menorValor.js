const livros = require('./listaLivro') // buscando o  arquivo com o require o objeto do arquivo listaLivro e passando para uma cont.


function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        // codigo  
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) { // verifica se os valores são menores com o menor achado dentro do objeto arrProdutos
            maisBarato = atual // guarda o menor valor encontrado dentro indice buscado dentro do objeto
        }
    }
    return maisBarato;

}

module.exports = menorValor;