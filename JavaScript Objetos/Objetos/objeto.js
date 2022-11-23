const cpf = ['333999222', '654987987', '321654987000']

// console.log(cpf[2])

const pessoa = {
    Nome: 'Leonardo',
    cpf: '321654987',
    telefone: ['11995588777']
}

// console.log(`${pessoa.Nome} e cpf ${pessoa.cpf} numero de telefone ${pessoa.telefone}`)
pessoa.telefone.push('321654987', '3216549876540', '321654987')


//console.log(pessoa.telefone)

pessoa.telefone.splice(2, 1) // uso do splice para cortar um valor da array podendo até adicionar algum valor na array 

//console.log(pessoa.telefone)

/* No JavaScript, vimos que objetos são estruturas de dados compostas por chave e valor, informações que ajudam a representar algo da vida real ou um conjunto de informações que faz sentido quando agrupado */


// criando um objeto 
const cliente01 = {
    nome: 'André',
    idade: 32,
    cpf: '123456789',
    email: 'andre@dominio.com'
};

// console.log(
//     `O nome do cliente01 é ${cliente01.nome} e essa pessoa tem ${cliente01.idade} anos seu cpf é ${cliente01.cpf} e o email é ${cliente01.email}`    
// );


// usando o substring(0,3) para mostrar apenas os 3 primeiros valores dentro da chave cpf
// console.log(
//     `O nome do cliente01 é ${cliente01.nome} e essa pessoa tem ${cliente01.idade} anos seu cpf é ${cliente01.cpf.substring(0, 3)} e o email é ${cliente01.email}`
// );




const cliente02 = {
    nome: 'André',
    idade: 32,
    cpf: '123456789',
    email: 'andre@dominio.com',
    altura: '' // se não existir o valor dentro do objeto ela vai mostrar no forEach undefined
};

// console.log(`O nome do cliente é ${cliente02.nome} e essa pessoa tem ${cliente02.idade} anos`)

const chaves = ['nome', 'idade', 'cpf', 'email', 'altura']

//  Utilizando o forEach para percorrer uma array e acessar na sua função de callback a chave e valor do objeto cliente02
// chaves.forEach((chaves) => {
//     console.log(`A chave ${chaves} tem o valor de ${cliente02[chaves]}`)
// })

const pessoas = {
    nome: 'Luma',
    profissao: 'Engenheira',
}

// console.log(pessoas.nome)
// console.log(pessoas.telefone)

// adicionar um consjunto de chave / valor novo
pessoas.telefone = '321654987987'

// console.log(pessoas.telefone)

pessoas.nome = 'Luma silva'
// console.log(pessoas.nome)
// console.log(pessoas)

const novaPessoa = {
    nome: 'Pedro'
}
// console.log(pessoas.profissao)

// Para excluir um conjunto chave / valor obs: devemos colocar o delete na frente!
delete pessoas.profissao

// console.log(pessoas.profissao)

// Crinado um conjunto de chave / valor
pessoas.profissao = 'Programador'

// console.log(pessoas.profissao)

// Excluindo o conjunto de chave / valor com notação de conchetes
delete pessoas['profissao']

// console.log(pessoas.profissao)
// Com o uso da constante é impossivel retribuir um objeto novo a outro objeto com const  ->  pessoas = novaPessoa < ----


const cliente03 = {
    nome: 'João',
    idade: 24,
    email: 'joao@email.com',
    telefone: ['113366999', '321654987'] // uso da array na chave telefone
};

// console.log(cliente03.telefone)


// Adicionando um objeto dentro do objeto cliente03 ( aninhado dentro de outro objeto)
cliente03.endereco = [{ // usando as chaves antes dos conchetes ou seja declarando uma array e dentro um objeto podemos adicionar mais de um objeto dentro da chave endereco
    rua: 'Joseph Climber',
    numero: 1234,
    apartamento: true,
    complemento: 'ap 934'
}]
// para verificar o objeto aninhado dentro do objeto cliente03
// console.log(cliente03['endereco']) // usando anotação de conchetes
//  console.log(cliente03.endereco)// usando anotação de ponto




cliente03.endereco.push({
    rua: 'R. Joseph Ladder',
    numero: 404,
    apartamento: false, // se o valor da chave for booleano e estiver como false, é desconsiderado a chave no filter
});


// console.log(cliente03.endereco)

// usando o metodo filter: cria uma const nova passa para ela o objeto com a chave necessaria para percorrer as arrays, e dentro da função de callback verificamos o que queremos para filtrar e jogar na nova const
const listAp = cliente03.endereco.filter((endereco) => endereco.apartamento === true);

// Importante, o metodo filter guarda o objeto encontrado com valores dentro de uma array, sendo necessario usar o indice dentro de um console.log ou chamada da const
// console.log(listAp[0].rua)// usando o indice dentro da listAp para verificar dentro do objeto a chave rua



// criando uma função dentro do objeto
const cliente04 = {
    nome: 'João',
    idade: 24,
    email: 'joao@email.com',
    telefone: ['113366999', '321654987'], // uso da array na chave telefone
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente`)
        } else {
            this.saldo -= valor
            console.log(`Pagamento realizado com sucesso. Novo saldo: ${this.saldo}`)
        }
    }
};

// efetuando pagamento com sucesso
// cliente04.efetuaPagamento(50)
// pagamento sendo negado devido falta de saldo
// cliente04.efetuaPagamento(190)

// Para criarmos um objeto O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.

// Objeto original
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

// criando um novo objeto usando o Object.create(objOriginal) passado o objeto via parâmentro  do protótipo 
const objPersonagem2 = Object.create(objPersonagem)

// quando alteramos o valor do objeto novo, não temos mais referencias e sim um objeto independente uma nova instância do objeto original
objPersonagem2.nome = "Gandalf, o Cinzento"

//    console.log(objPersonagem.nome) //Gandalf
//    console.log(objPersonagem2.nome) //Gandalf, o Cinzento


const cliente05 = {
    nome: 'João',
    idade: 24,
    email: 'joao@email.com',
    telefone: ['113366999', '321654987'] // uso da array na chave telefone
};

cliente05.endereco = [{ // usando as chaves antes dos conchetes ou seja declarando uma array e dentro um objeto podemos adicionar mais de um objeto dentro da chave endereco
    rua: 'Joseph Climber',
    numero: 1234,
    apartamento: true,
    complemento: 'ap 934'
}]



// formas de acessar as chaves usando o forin

for (let chave in cliente05) {
    // console.log(chave);// usando o forin para verificar as chaves do objeto
    // console.log(cliente05[chave]);// usando a chave dentro do objeto cliente05 para mostra os valores
    //console.log(` ${chave}  ${cliente05[chave]} `);

    let tipo = typeof cliente05[chave] // usando o typeof para verificar o tipo de dados no objeto para guardar no momento na let

    // console.log(`${tipo} ${chave}  ${cliente05[chave]} `);

    // if (tipo !== "object" && tipo !== "function") {// usamos um if para verificar se o tipo da chaves não são object e function
    //     console.log(` ${chave}  ${cliente05[chave]} `);
    // }


    if (typeof cliente05[chave] !== 'object' && typeof cliente05[chave] !== 'function') {//usamos um if para verificar se o tipo da chaves não são object e function 
        // console.log(` ${chave}  ${cliente05[chave]} `);
    }

}

const cliente06 = {
    nome: "João",
    idade: 24,
    email: 'joao@email.com',
    telefone: ['321654987', '321654456789'],

}
cliente06.enderecos = [{
    rua: 'R.muniz barreto',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
}];


// Usando o metodo de objeto para guardar suas chaves em uma array
const chavesDoObjeto = Object.keys(cliente06);// Metodo de Object.keys(cliente06)
//console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("endereco")) {// verificando se há uma chave valor chamada endereço com o uso do includes
    // console.log(`Erro, É necessário ter um endereço cadastrado`)
}



// Trabalhando com a sintaxe de espalhamento spread operator
const cliente07 = {
    nome: "João",
    idade: 24,
    email: 'joao@email.com',
    telefone: ['321654987', '321654456789'],

}
cliente07.enderecos = [{
    rua: 'R.muniz barreto',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
}];
cliente07.enderecos.push([{
    rua: 'R.tabatiguera',
    numero: 1337,
    apartamento: false,
    complemento: 'vila tabera',
}]);

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

//ligaParaCliente(cliente07.telefone[0],cliente07.telefone[1]) // Chamando a função passando os parâmetros obj chave e indice de chave
//ligaParaCliente(...cliente07.telefone); // chamando a função passando a sintaxe de espalhamento spread operator



const encomenda = {
    destinatario: cliente07.nome,

    // rua: cliente07.enderecos[0].rua,
    // numero: cliente07.enderecos[0].numero,
    // apartamento: cliente07.enderecos[0].apartamento,
    // complemento: cliente07.enderecos[0].complemento,
    ...cliente07.enderecos[1],
    ...cliente07.enderecos[0], // para não ter que acessar as propriedades do objeto enderecos e mostrar podemos colocar a sintaxe de espalhamento spread operator


}

// console.log(encomenda)


// exemplos 

const guerreiroZodiaco = {
    nome: 'Seya',
    tipo: 'Pégaso',
    forca: 'Cavaleiro de Bronze'
}
const poderGuerreiros = {
    poder: 'meteoro de pégaso',
    nivelForca: 75
}


// usando a sintaxe de espalhamento spread operator para espelhar em uma array as chaves e valores dos objetos
// !!!! IMPORTANTE, Os objetos nunca devem usar os mesmo nomes de chaves quando usar a sintaxe de espalhamento, pois ocorrera a sobre escrita das chaves colocando os valores do ultimo objeto adicionado
const guerreirosPerformace = {...guerreiroZodiaco, ...poderGuerreiros}

// console.log(guerreirosPerformace)

// Formato JSON (Java Script Object Notation) Notação de Objeto Java-Script


// Objeto em formato JavaScript
const cliente08 = {
    nome: 'Leonardo',
    email: 'leo@email.com',
    telefone: ['321123321','321654987'],
    endereco: {
        rua: 'R. Olindo fraga',
        numero: 1337,
        apartamento: true,
        complemento:'ap 934',
    },
};


// Mesmo Objeto só que em JSON
/* {
    "nome": "Leonardo",
    "email": "leo@email.com",
    "telefone": ["321123321","321654987"],
    "endereco": {
        "rua": "R. Olindo fraga",
        "numero": 1337,
        "apartamento": true,
        "complemento":"ap 934"
    }
} */



