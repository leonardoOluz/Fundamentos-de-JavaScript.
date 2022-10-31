const listaLivros = require('./arrayOrdenado')

function busca(array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
        // 1°  array = 5 , de = 0, meio = math.floor(5/2), Vl 10
        // 2° array = 2, de = 0, meio = math.floor(2/2), vl 10  
    }
    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
        // 1° array = 10, meio = math.floor(6), ate = 10, vl 10
        // 2° array = 10, meio = math.floor(4), ate = 10, vl 10

    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 60))
