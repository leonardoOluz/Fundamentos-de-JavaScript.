const cliente = require('./cliente.json')

function ordenar(cliente, propriedade, decrescente = 'crescente') {
    const resultados = cliente.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1
        } else if (a[propriedade] > b[propriedade]) {
            return 1
        } else {
            return 0
        }
    })
    if(decrescente !== 'crescente'){
        resultados.reverse();
    }
    return resultados
}

const nomeReverso = ordenar(cliente, 'nome', 1)

console.log(nomeReverso)