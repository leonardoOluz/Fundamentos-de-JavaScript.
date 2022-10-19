// Funções dentro de Objetos

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
    saldo:100,
    depositar:function(valor){ // função depositar 
        this.saldo += valor // this.saldo (Referencia ao proprio objeto) para atribuir a esta conta ou este objeto
    },
    sacar: function(valor){ // função sacar
        this.saldo -= valor 
    }
}
console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
cliente.sacar(130)
console.log(cliente.saldo)

