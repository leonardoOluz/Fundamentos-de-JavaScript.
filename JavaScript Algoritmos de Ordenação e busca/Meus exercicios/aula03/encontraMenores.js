const listaLivros = require('./array');

function encontraMenor(pivo, array) {
    let menores = 0;
    for (let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];
        if (produtoAtual.preco < pivo.preco) {
            menores++;
        }
    }

    trocarLugar(array, array.indexOf(pivo), menores)    
    
    return array;

}

function trocarLugar(array, de, para) {
    const  elem1 = array[de]
    const  elem2 = array[para]
    
    array[para] = elem1
    array[de]   = elem2

}




console.log(encontraMenor(listaLivros[2], listaLivros));