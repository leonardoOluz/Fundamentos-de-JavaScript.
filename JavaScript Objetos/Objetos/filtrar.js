const clientes = require('./cliente.json')

// função filtrados com complementos em falta
function filterApSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento'))
    })
}

// função filtrados que não moram em apartamento 
function filterSemAp(clientes){
    return clientes.filter((cliente) => {
        return (!cliente.endereco.apartamento)
    })
}


const filtrados = filterApSemComplemento(clientes)
const filtradosNoAp = filterSemAp(clientes)

console.log(filtradosNoAp)
