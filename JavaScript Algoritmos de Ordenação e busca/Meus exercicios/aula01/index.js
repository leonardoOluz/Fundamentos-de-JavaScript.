const { edFolha, edGalho } = require('./arrays');

const edFolhaAtualizada = insertionSort(edFolha);
const edGalhoAtualizada = insertionSort(edGalho);

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
    // console.log(lista)
    return lista
}

function juntaLista(lista1, lista2) {
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];
        console.log(`Comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`);

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1
            posicaoAtualLista1++;
        } else {
            listaFinal[atual] = produtoAtualLista2
            posicaoAtualLista2++;
        }
        atual++;

    }
    while (posicaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1]
        posicaoAtualLista1++;
        atual++;
    }
    while (posicaoAtualLista2 < lista2.length) {
        listaFinal[atual] = lista2[posicaoAtualLista2]
        posicaoAtualLista2++;
        atual++;
    }

    return listaFinal;
}

console.log(juntaLista(edGalhoAtualizada, edFolhaAtualizada));



// Nesta aula, aprendemos:

// Podemos pensar em novas formas de “atacar” um problema de ordenação, começando a partir de partes menores já ordenadas e unindo estas partes em uma única lista ordenada;

// Evoluímos o conceito e testamos o funcionamento do algoritmo com uma simulação sem código, similar ao “teste de mesa”, para entendermos quais operações deverão ser feitas pelo código durante o fluxo de execução do programa;

// Após utilizarmos a simulação para entendermos o fluxo do algoritmo e o que ele deve fazer, desenvolvemos um código em JavaScript para implementá-lo através da função juntaListas(), que percorre cada uma das duas listas informadas por parâmetro, compara os valores de cada uma, posiciona estes valores em uma lista única de acordo com o resultado da comparação e, por fim, retorna a lista unida.
