// usando metodos de objetos

const cliente = {
    nome: "Leonardo",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fones: ['55912345498', '5521988743124'], // uma array da propriedade do objeto cliente.    
    dependentes: [
        {
            nome: "Lucca",
            parentesco: "filho",
            dataNasc: "20/03/2018"
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

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj); // usando o metodo de array de Objetos.keys para guardar todas as chaves (keys) na variavel
    if(propsClientes.includes("dependentes")){ // se for incluso a chave dependentes no objeto passara como true se não false
        console.log(`Oferta de seguro de vida para ${obj.nome}`); // console.log acaso seja true
    }else{ // console.log acaso seja false
        console.log(`Não a oferta para o cliente ${obj.nome}, o mesmo está fora dos requisitos para promoção de oferta.`);
    }
}
console.log(Object.entries(cliente));// Função Object.entries(obj) traz os dados em array demostrando no indice 0->nome da chave indice 1 -> o valor da chave.
console.log(Object.values(cliente)); //Função Object.values(obj) traz os valores dos objetos a ser pesquisado dentro do Object.values(obj).
oferecerSeguro(cliente);


