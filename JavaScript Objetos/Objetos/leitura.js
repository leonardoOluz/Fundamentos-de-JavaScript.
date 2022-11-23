const dados = require('./cliente.json')


console.log(typeof dados)
console.log(dados.email)
console.log(dados.telefone[0])

const clienteEmString = JSON.stringify(dados) // transformando o objeto em string
console.log(clienteEmString)

console.log(typeof clienteEmString)// usando typeof para verificar seu tipo 
console.log(clienteEmString.nome)

const objetoCliente = JSON.parse(clienteEmString);// transformando a string em objeto
console.log(objetoCliente)

console.log(dados)
