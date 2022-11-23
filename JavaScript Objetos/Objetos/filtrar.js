const clientes = require('./cliente.json')

function clienteSemComplementoAp(clientes) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento'))
    })
}

const listaSemCompl = clienteSemComplementoAp(clientes)
console.log(listaSemCompl)

