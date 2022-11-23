const clientes = require('./cliente.json');

// Usando o metodo .find para retornar um valor de uma chave dentro do objeto passado
function pesquisarCliente(lista, chave, valor){
    return lista.find((cliente) => cliente[chave].includes(valor))
}

const clienteNome = pesquisarCliente(clientes, 'nome', 'Lucca')
console.log(clienteNome)
