const listaLivros = require('./array')



function mergeSort(array) {

    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
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