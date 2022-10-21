//  Manipulando Prototype

function Cliente (nome, cpf, email, saldo){
    this.name = nome
    this.cpd = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const leonardo = new Cliente('Leonardo', '336.926.378-55', 'leonardo@email.com',258);


function ClientePoupanca(nome, cpf, email, saldo = 0, saldoPoup = 0){
    Cliente.call(this, nome, cpf, email, saldo)// funcção ,call chama a função cliente e joga para dentro 
    this.saldoPoup = saldoPoup
}

const lucca = new ClientePoupanca('Lucca', '336.922.458-71','lucca@email.com',258,290)

const leo = new ClientePoupanca('Leonardo', '333.926.721-55', 'leo@email.com',755.392, 300)




ClientePoupanca.prototype.depositarPoup = function(valor){ // Na definição de prototype colocamos uma nova função dentro da funcção Cliente poupanção
    this.saldoPoup += valor
}


leo.depositarPoup(350)
lucca.depositarPoup(30)
console.log(lucca)
console.log(leo)
console.log(lucca.saldoPoup)
console.log(leo.saldoPoup)

