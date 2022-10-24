// Programação orienteda a objetos com javaScript
class Cliente {
    constructor(nome, email, cpf, saldo){
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
const rosangela = new Cliente('Rosangela Alves  de Oliveira ', 'rosangela@email.com', '339.721.958-45', 78.945);

rosangela.exibirSaldo()

console.log(rosangela)


