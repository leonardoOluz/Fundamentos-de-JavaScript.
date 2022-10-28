const listaLivros = require('./array')



function mergeSort(array,nivelAninamento = 0 ) {
    console.log(`Nível de aninhamento ${nivelAninamento}`)
    console.log(array)

    if (array.length > 1) {
        
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio), nivelAninamento +1);
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninamento + 1);
        
        array = ordenar(parte1, parte2);
    }

    return array;
}


function ordenar(parte1, parte2) {
    let posicaoParte1 = 0;
    let posicaoParte2 = 0;
    const resultado = [];

    while (posicaoParte1 < parte1.length && posicaoParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoParte1];
        let produtoAtualParte2 = parte2[posicaoParte2];
        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1)
            posicaoParte1++;
        } else {
            resultado.push(produtoAtualParte2)
            posicaoParte2++;
        }

    }
    return resultado.concat(posicaoParte1 < parte1.length ? parte1.slice(posicaoParte1): parte2.slice(posicaoParte2));

}





console.log(mergeSort(listaLivros));


// Nesta aula, aprendemos:

// Expandimos o conceito de “dividir para conquistar”, reutilizando a lógica de ordenar duas listas, e desenvolvemos um algoritmo para ordenar uma única lista;
// Utilizando o recurso das simulações e testes, entendemos o funcionamento de um algoritmo de ordenação muito utilizado no dia-a-dia, o Merge Sort;
// Após entendermos o fluxo do algoritmo, fizemos a implementação do algoritmo Merge Sort com JavaScript, através da função mergeSort() que recebe um array e retorna este array ordenado;
// Estudamos a ferramenta de recursão, como ela pode ser utilizada no algoritmo Merge Sort e as diferenças dessa ferramenta com relação aos laços de repetição.