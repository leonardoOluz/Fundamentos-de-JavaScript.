// Propriedades do prototype


function Cliente (nome, cpf, email, saldo){
    this.name = nome
    this.cpd = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const leonardo = new Cliente('Leonardo', '33394578972', 'leonardo@!email.com', 258000)

console.log(leonardo)

leonardo.depositar(258000)
console.log(leonardo.saldo)
 