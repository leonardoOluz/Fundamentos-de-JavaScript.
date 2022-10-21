// Programação orienteda a objetos com javaScript

class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }

}

const leonardo = new Cliente('Leonardo','leonardo@email.com','335.336.992-77',350)

leonardo.exibirSaldo
console.log(leonardo)

