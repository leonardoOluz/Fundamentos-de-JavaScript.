const clientes = require('./cliente.json');

// Trabalhando com o uso do filter para filtrar uma lista de objetos conforme os parâmentros passados
function clienteSemComplementoAp(clientes) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento'))
    })
}

const clienteSemCompl = clienteSemComplementoAp(clientes)
console.log(clienteSemCompl)

