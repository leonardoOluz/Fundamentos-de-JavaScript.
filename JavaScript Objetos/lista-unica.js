// Sintaxe de espalhamento

const clientes = [{
    nome: "Leonardo",
    idade: 36,
    cpf: "123456789",
    email: "leo@email.com",
    fones: ['55912345498', '5521988743124'], // uma array da propriedade do objeto cliente.    
    dependentes: [
        {
            nome: "Lucca",
            parentesco: "filho",
            dataNasc: "20/03/2018"
        },
        {
            nome: 'Sofia Maria',
            parentesco: "filha",
            dataNasc: '04/01/2014'
        }
    ]
},
{
    nome: "Lucca",
    idade: 36,
    cpf: "123456789",
    email: "lucca@email.com",
    fones: ['559123443201', '5521988743321'], // uma array da propriedade do objeto cliente.    
    dependentes: [
        {
            nome: "Gustavo",
            parentesco: "filho",
            dataNasc: "20/03/2018"
        },
        {
            nome: 'Ana Maria',
            parentesco: "filha",
            dataNasc: '04/01/2014'
        }
    ]
}
]

for(let i =0; i< clientes.length;i++){ // usando o for para percorrer a quantidade de indice que contém no objeto cliente
    const listaDependentes = [...clientes[i].dependentes] // usando os operador de espalhamento (...) pontos para espalhar os dependentes
    console.log(`Os dependentes de ${clientes[i].nome}`)
    console.table(listaDependentes) // usando o console.table para demostrar uma planilha com a lista de dependentes
}


