const clientes = require('./cliente.json')

function filterApNotComplet(clientes) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento'))
    });
}

function filterNoAp(clientes) {
    return clientes.filter((cliente) => {
        return (!cliente.endereco.apartamento)
    })
}
function filterApOk(clientes) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && cliente.endereco.hasOwnProperty('complemento'))
    })
}

const filtrados = filterApNotComplet(clientes)
const filtradosNoAp = filterNoAp(clientes)
const filtradosYesAp = filterApOk(clientes)

console.log(filtradosYesAp)

