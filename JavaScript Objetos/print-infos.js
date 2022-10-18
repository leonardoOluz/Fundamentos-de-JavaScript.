// ***  Usando anotação de ponto para acessar o objeto

const cliente = {
    nome: "Leonardo",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`) // usando  variavel cliente e .nome para acessar o valor de um objeto dentro 
console.log(cliente.cpf.substring(0,3)) // Utilizando o .substring(0,3) para acessar os primeiros tres elementos dentro do objeto com a variavel cpf.
