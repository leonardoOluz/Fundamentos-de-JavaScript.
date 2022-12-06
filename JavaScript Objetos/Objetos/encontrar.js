const cliente = require('./cliente.json')

function verificacaoComplemento(lista, chave, valor){
    return lista.find((cliente)=> cliente[chave].includes(valor))
}

function listaSemComplementos(lista){
    return lista.filter((list) => {
        return (list.endereco.apartamento && !list.endereco.hasOwnProperty('complemento'))
    })
}

const listaComplemento = listaSemComplementos(cliente)

// const clienteNome = verificacaoComplemento(cliente,'nome','Lucca')

console.log(listaComplemento)

