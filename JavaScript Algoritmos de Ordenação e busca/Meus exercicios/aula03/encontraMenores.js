const listaLivros = require('./array');

// Função encontraMenor, procura a quantidade de indice que temos de menor valor e retorna a quantidade de indice
function encontraMenor(pivo, array) {
    let menores = 0; // let menores para guardar a quantidade de indice menores que o valor do pivo
    for (let atual = 0; atual < array.length; atual++) { // for para percorrer a array 
        let produtoAtual = array[atual]; // let produtoAtual guarda o elemento do objeto para comparar no if
        if (produtoAtual.preco < pivo.preco) {// if compara os valores do pivo com o indice atual
            menores++;// acaso o indice atual for de menor valor comparado com o pivo let menores recece um valor a mais 
        }
    }
    //          obj,    o elemento pivo,    n° de elementos mais em conta que o pivo 
    trocarLugar(array, array.indexOf(pivo), menores)
    return array;
}
// função trocaLugar recebe o objeto e de paramentros o indice do pivo a ser trocado com o indice encontrado na encontrarMenor()obs: o indice menores é a quantidade de elementos encontrado com menor valor que o pivo. 
function trocarLugar(array, de, para) {
    const elem1 = array[de] // elem1 recebe a propriedade do objeto que estamos colocando como pivo
    const elem2 = array[para]// elem2 recebe a propriedade do objeto mais com o numero do indice de quantidade de elementos mais barato que o pivo, pois a quantidade de elementos é o ultimo indice onde o pivo tem que se mover.
    array[para] = elem1 // trocando a propriedade do objeto do pivo para o elemento achado no encontraMenor()
    array[de] = elem2 // trocando a propriedade do objeto achado com o valor menores do encontrarMenor() para o indice do pivo 
    //return array
}
// Dividindo a array em dois e colocando um pivo aparti da metade para encontrar a quantidades de elementos menores que o mesmo e trocar de lugares 
function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)];// pivo recebe a array dividida em dois 
    encontraMenor(pivo, array); // função encontrar menor para verificar a quantidade de indice menores que o pivo 
    let valoresMenores = 0;
    for (let analisando = 0; analisando < array.length; analisando++) { // for para percorrer a array usando a variavel analisando para passar pela array.
        let atual = array[analisando]; // let atual recebe o elemento de verificação da vez 
        if (atual.preco <= pivo.preco && atual !== pivo) {// se a let atual.preco for menor que pivo.preco que é a metado da array 
            trocarLugar(array, analisando, valoresMenores)// trocalugar()  inverte os valores de analisando que é o indice analisado no momento  
            valoresMenores++;
        }
    }
    return array;
}

console.log(divideNoPivo(listaLivros))

module.exports = trocarLugar;