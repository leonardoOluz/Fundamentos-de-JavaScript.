// Programação orienteda a objetos com javaScript


// Class mãe 

class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
        this.debitos = 0
    }
    sacar(valor){
        this.saldo -= valor
        console.log(`Sr(a) ${this.nome}, foi sacado em sua conta o valor de R$ ${valor} seu saldo é de R$ ${this.saldo}`)
    }
    depositar(valor) {// metodo da classe principal
        this.saldo += valor
        console.log(`Sr(a) ${this.nome}, foi depositado em sua conta o valor de R$ ${valor} seu saldo é de R$ ${this.saldo}`)
    }
    exibirSaldo() {// metodo da classe principal
        console.log(`Sr(a) ${this.nome}, seu saldo é de R$ ${this.saldo}`)
    }
    taxaDeManutencao(valor) {// metodo da classe principal
        if (this.saldo > valor) {
            this.saldo -= valor
            console.log(`Sr(a) ${this.nome}, foi descontado em sua conta uma taxa referente a manutenção de conta no valor de R$ ${valor} seu saldo é de R$ ${this.saldo}`)
        } else {
            this.debitos += valor
            console.log(`Sr(a) ${this.nome}, não foi possivel descontar a taxa de manutenção em sua conta o valor de R$ ${valor} seu saldo é de R$ ${this.saldo} esse valor será acumulado para o proximo mês. Saldo de divida com o banco no valor de R$ ${this.debitos}`)           
        }

    }
}
// subclasse filha de cliente

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo) // super se refere a super classe ou seja a classe mãe
        this.saldoPoupanca = saldoPoupanca // uma abstração da subclasse ClientePoupanca
    }
    sacarPoupanca(valor) {// metodo da classe filha 
        this.saldoPoupanca -= valor
        console.log(`Sr(a) ${this.nome}, foi sacado em sua conta o valor de ${valor} seu saldo é de R$${this.saldoPoupanca}`)
    }
    depositarPoupanca(valor) { // metodo da classe filha ClientePoupanca
        this.saldoPoupanca += valor
        console.log(`Sr(a) ${this.nome}, foi depositado em sua conta o valor de ${valor} seu saldo é de R$${this.saldoPoupanca}`)
    }
    exibirSaldoPoupanca() {// metodo da classe principal
        console.log(`Sr(a) ${this.nome}, seu saldo na CP é de R$${this.saldoPoupanca}`)
    }
    taxaDeManutencao(valor) {// metodo da classe filha
        if (this.saldo > valor) {
            this.saldo -= valor
            console.log(`Sr(a) ${this.nome}, foi descontado em sua conta o valor de ${valor} seu saldo é de R$${this.saldo}`)
        } else if (this.saldoPoupanca > valor) {
            this.saldoPoupanca -= valor
            console.log(`Sr(a) ${this.nome}, foi descontado em sua conta o valor de ${valor} seu saldo na CP é de R$${this.saldoPoupanca}`)
        } else {
            this.debitos += valor
            console.log(`Sr(a) ${this.nome}, não foi possivel descontar a taxa de manutenção em sua conta o valor de R$ ${valor} seu saldo é de R$ ${this.saldo} esse valor será acumulado para o proximo mês. Saldo de divida com o banco no valor de R$ ${this.debitos}`) 
        }
    }
}

const ana = new Cliente('Ana', 'ana@email.com', '222.333.111-33', 0)// criando um objeto apartir da classe mãe

const leonardo = new ClientePoupanca('Leonardo Oliviera da Luz', 'leonardo@email.com', '332.572.222-45', 0, 0)// criando um objeto apartir da subclasse ou classe filha ClientePoupanca 

const lucca = new ClientePoupanca('Lucca', 'lucca@email.com', '333.222.555-00', 0, 0)// criando um objeto apartir da subclasse 

leonardo.exibirSaldo()
leonardo.depositar(1000)
leonardo.exibirSaldo()
leonardo.sacar(250)
leonardo.taxaDeManutencao(177)
leonardo.sacar(673)
leonardo.taxaDeManutencao(150)
leonardo.taxaDeManutencao(150)
leonardo.taxaDeManutencao(150)

