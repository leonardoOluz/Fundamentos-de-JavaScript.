const livros = require('./listaLivro')

function insertionSort(lista) {
// função recebe um objeto(lista)
    for (let atual = 0; atual < lista.length; atual++) {
        // loop com variavel de controle na posição atual(0)
        // loop vai até o maximo de indice do objeto(lista.length)
        // atual vai de 0 a 5.
        let analise = atual
        // analise recebe o valor da atual
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            // 0 > 0 e lista[0].preço < lista[-1].preço ? obs-> lista[-1].preço não existe no objeto então o while por ser porta logica AND já não entra no loop while

            // while sempre verificara se o valor do item preço da primeira propriedade que é indice [0] é menor que a anterior [-1], nesse caso o loop não entra para verificar 
            //while verifica o valor do item preço da segunda propriedade que tem indice [1] com indice anterior [0] se o indice atual for menor, as variaveis invertem os objetos conforme a baixo
            
            // variavel analiseAtual recebe o objeto da lista de livros do item atual
            let analiseAtual = lista[analise]

            // variavel analiseAnteriro recebe o objeto da lista de livros do item anterior
            let analiseAnterior = lista[analise - 1]

            // lista de livro atual recebe a lista anterior invertendo os objetos dentro
            lista[analise] = analiseAnterior

            //lista de livro anterior recbe a lista atual invertendo os objetos dentro
            lista[analise - 1] = analiseAtual

            // a variavel é subtraida 1 para verificação do while com valores anteriores na lista[analise]
            analise--

        }

    }
    // imprime o objeto livros
    console.log(lista)
}


insertionSort(livros)


