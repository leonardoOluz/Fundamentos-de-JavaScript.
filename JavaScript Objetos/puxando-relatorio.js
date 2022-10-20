// Puxando relatorios com o uso do For In

const cliente = {
    nome: "Leonardo",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fones: ['55912345498', '5521988743124'], // uma array da propriedade do objeto cliente.    
    dependentes: [
        {
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: 'Samia Maria',
            parentesco: "filha",
            dataNasc: '04/01/2014'
        }
    ],
    saldo: 100,
    depositar: function (valor) { // função depositar 
        this.saldo += valor // this.saldo (Referencia ao proprio objeto) para atribuir a esta conta ou este objeto
    },
    sacar: function (valor) { // função sacar
        this.saldo -= valor
    }
}

let relatorio = "";

for (let info in cliente) {// metodo for in para uso de objetos. Utilizado para pegar as chaves do objetos 
    // usando if else para separar os sub objetos e function dentro do objetos
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function" ){ // no if separamos os objetos e function para não guardar na variavel relatorios
        continue
    }else{ // o restante é guardado na variavel relatorio com o uso do else
        relatorio += `
        ${info} ==> ${cliente[info]}
        ` // uso da let relatorio para guardar a chave dentro
    }
    
}
console.log(typeof cliente.depositar)// verificando typeof do depositar do objeto cliente
console.log(relatorio) // logo apos o uso do for in, mostramos o relatorio com as informações passadas dentro dele 
