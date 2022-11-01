const listaLivros = require('./arrayOrdenado')


// Busca Binaria

function busca(array, de, ate, valorBuscado) {
    console.log('de , ate', de, ate )
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];
    if (de > ate) {
        return -1;
    }
    if (valorBuscado === atual.preco) {
        return meio;
    }
    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado); // recursão
         
    }
    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado); // recursão
        
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 35))
