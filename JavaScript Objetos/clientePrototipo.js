/* Iniciaremos com a criação de um novo arquivo chamado ” clientePrototipo.js” e adicionando o código abaixo a ele, para definir construtores de objetos. */

function Cliente (nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

/* Agora vamos definir um construtor que utiliza o Cliente para gerar um novo tipo de cliente. */

const leonardo = new Cliente('Leonardo','339.278.559-70','leonardo@email.com',358000);

function clientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const lucca = new clientePoupanca('Lucca','445.771.665-52','lucca@email.com',370000,0)


// Agora vamos manipular o comportamento do protótipo do objeto ClientePoupanca, adicionando o código abaixo:

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

/* Então podemos testar algumas propriedades e validar a ideia de cadeia de protótipos. Digite o seguinte: */

console.log(leonardo.hasOwnProperty("saldoPoup"))
console.log(lucca.hasOwnProperty("saldoPoup"))
console.log(leonardo instanceof Cliente)
console.log(typeof leonardo)
console.log(typeof lucca)
console.log(lucca instanceof clientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)



/* Nessa aula, você aprendeu:
Que no Javascript o protótipo representa um objeto “modelo” com seus métodos, utilizado como base para a criação de outros objetos;
Como acessar propriedades de protótipo através de __proto__ e da propriedade prototype;
Como a herança de protótipo é utilizada para a criação de dados primitivos, arrays e objetos com JavaScript;
Como criar objetos utilizando funções construtoras;
Como utilizar a herança para criação de novos objetos com a propriedade prototype. */

