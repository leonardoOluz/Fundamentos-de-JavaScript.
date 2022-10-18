// *** Usando anotação de conchetes para acessar o objetos

const cliente = {
    nome: "Leonardo",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    end: "Rua Muniz Barreto",
    numero: 124
}

const chaves =["nome","idade","cpf","email","end","numero"];// usando array 

console.log(cliente[chaves[0]]); // passando o objetos com a array dentro dos conchetes 

chaves.forEach(info => console.log(cliente[info])) // usando a função callback com uso do array chaves

console.log(cliente["nome"]) // usando o objeto com a anotação de conchetes e "" duplas com o nome do indice a acessar
