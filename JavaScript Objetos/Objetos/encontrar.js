const clientes = require('./cliente.json')

// função para encontrar um cliente com o uso do ( .find ) 
function encontrarCliente(clientes, chave, valor){
    return clientes.find((cliente) => cliente[chave].includes(valor))
}

// chamando a função encontraCliente e salvando em uma variavel passando os parâmentros (  obj, chave, valor )
const buscarCliente = encontrarCliente(clientes, 'nome', "Lucca")
console.log(buscarCliente)
