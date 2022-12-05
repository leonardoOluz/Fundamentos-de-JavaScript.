const cliente = require('./cliente.json')

function pesquisarCliente(objLista, chave, valor){
    return objLista.find((lista) => lista[chave].includes(valor))
}


const clienteResult = pesquisarCliente(cliente, 'nome', 'Vania')

console.log(clienteResult)
