const livros = require('./listaLivro')

function menorValor(arrProdutos, posicaoAtual) {
    //                 (  objeto   , posição Atual)
    let maisBarato = posicaoAtual;

    for (let atual = posicaoAtual; atual < arrProdutos.length; atual++) {

        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            //     0=25         <          0=25
            //     1=15         <          0=25
            //     2=30         <          1=15
            //     3=50         <          1=15
            //     4=45         <          1=15

            maisBarato = atual

        }

    }
    return maisBarato
    //  indice 1=15 na variavel maisBarato

}


for (let atual = 0; atual < livros.length; atual++) {
    
    let menor = menorValor(livros, atual);

    
    let livroAtual = livros[atual]
    let maisBarato = livros[menor];
    
    

    livros[atual] = maisBarato
    livros[menor] = livroAtual

}



console.log(livros);
