// Objetos em Objetos

const cliente = {
    nome: "Leonardo",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fones: ['55912345498', '5521988743124'] // uma array da propriedade do objeto cliente.    
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva"; //Alterando o valor da propriedade dentro do objetos

console.log(cliente)
 
