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
function encontrarCliente(lista, chave, valor){
    return lista.find((client) => client[chave].includes(valor))
}
function encontrarComplemento(cliente){
    return cliente.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento'))
    })
}



const nomeReverso = ordenar(cliente, 'nome', 1)
const clienteEncontrado = encontrarCliente(cliente, 'nome', 'Lucca')
const clienteComplemento = encontrarComplemento(cliente)


console.log(clienteComplemento)

