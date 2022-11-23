const clientes = require('./cliente.json')

// Utilizando o find para encontrar o cliente dentro do array clientes.
function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor))
}
const encontrado = encontrar(clientes, 'nome', 'Bidu')
const encontrado2 = encontrar(clientes, 'telefone', '58996279799')
console.log(encontrado2)
