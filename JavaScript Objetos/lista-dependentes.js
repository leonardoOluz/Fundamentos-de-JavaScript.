// Lista de Objetos
const cliente = {
    nome: "Leonardo",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fones: ['55912345498', '5521988743124'], // uma array da propriedade do objeto cliente.    
    dependentes: [{ // uma array com objetos dentro da array ( Arrays de objetos )
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({ // Metodo de array .push para adicionar um novo objeto dentro da array dependentes.
    nome: 'Samia Maria', parentesco: "filha", dataNasc: '04/01/2014'
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")// metodo de array .filter para verificar o valor dentro de uma array guardando dentro da variavel outra array

console.log(filhaMaisNova[0].nome)
