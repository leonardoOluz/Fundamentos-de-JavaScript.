//                                        #  JavaScript Objetos  #


const listaCpfs = ['123456798', '123456465', '123456456'] // uma array sozinha não é capaz de guardar dados necessario para um objeto

const cliente = ["nome", "André", "idade", 36]// com apenas array só podemos guardar os valores dentro


//  * Criando um Objeto Cliente *

// Uma objeto é composto por uma cadeia de chaves com valores 

//    objeto
const cliente1 = {
    //  keys:  valores    
    nome: "André",
    idade: 36,
    cpf: "1232456789",
    email: "andre@email.com"
}





// ** Formas de acessar o Objeto **



// console.log(`Meu nome é ${cliente1.nome} e tenho ${cliente1.idade} anos.`) // usando notação de ponto para acessar a chave do objeto ex:${cliente.nome}

// console.log(cliente1.cpf.substring(0,3))// usando  .substring(0,3) para mostrar apenas aguns caracteres dos valores. necessario passar os paramentros






// *** Formas de acessar uma chave sem o nome da chave no objeto ***


const chaves = ["nome", "idade", "cpf", "email"]// usando uma array com os valores escrito com os nomes da chaves do objeto cliente1

// console.log(cliente1[chaves[0]]) // usando notação de conchetes para passar os valores da variavel chaves

// obs: console.log(cliente1[chaves]) se passarmos só a chave dentro do conchete, não será possive acessar pois não existe nenhuma chave chamada chaves dentro do objeto cliente1

// obs: console.log(cliente1.chaves) se passarmos chaves usando notação de ponto, também não é possivel acessar pois chaves não é uma chave do objeto cliente1.

// chaves.forEach(info => console.log(cliente1[info]))// Usamos o forEach na array chaves para que possa acessar todo indice do array mais passando os valores, no exemplo o paramentro (info) traz de dentro da array os valores e é adicionado no console.log dentro da anotação de conchetes do cliente1[info]. dessa forma imprime todos os valores das chaves dentro do objeto cliente1

// console.log(cliente1["idade"]) // passando dentro da anotação de conchetes o nome da chave do objeto cliente1, só podemos passar desta forma quando conhecemos o objeto e sua chave mais não é viavel seu uso na programação







// **** Adicionando chaves e valores dentro do objetos ****



console.log(cliente1); // antes de passar a nova chave e valor

cliente1.fone = "123456789"; // passando com anotação de ponto uma nova chave e usando = para adicionar a essa nova chave os valores podemos criar no objeto uma nova chave com seu valor dentro do objeto.

console.log(cliente1)// depois de passar a nova chave e valor

cliente1.fone = "321654987"; // Ao passarmos um novo valor a chave criada no objeto cliente1, estamos sobreescrevendo os valores dentro da chave.

console.log(cliente1);// depois de sobrescrever o valores da chave imprindo verificamos que foi alterado os valores de .fone do cliente1






//  ***** Adicionado mais de um valor dentro da chave *****

const cliente2 = {
    //  keys:  valores    
    nome: "André",// dados do tipo estring
    idade: 36,// dados do tipo number
    cpf: "1232456789",// dados do tipo string
    email: "andre@email.com",// dados do tipo estring

    // chave fone = dados do tipo array
    fones: ["321654987", "3216549876"] // Para adicionar uma chave com valores dentro de array precisamos colocar conchetes [] depos da chave
}

cliente2.fones.forEach(fones => console.log(fones)) // usamos um metodo de array forEach para percorrer todos os valores da array fones do objeto cliente2








// ******    Adicionando objetos dentro de objetos    ******



cliente2.dependentes = { // Ao colocarmos um objeto existente e passar uma nova chave com anotação de ponto e passando para essa chave = { as novas chaves com seus valores dentro} criamos um novo objeto dentro de outro objeto
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente2); // imprimindo o objeto cliente2 com seu novo objeto dependentes



//  Como fazer alteração dentro do objeto dependentes que está dentro do objeto cliente2



cliente2.dependentes.nome = "Sara Silva"; // Para mudarmos os valores dentro da chave de um objeto dentro de outro objeto, acessamos o objeto principal e com anotação de ponto acessamos o objeto dentro do objeto e outra vez anotação de ponto para acessar a chave que desejamos alterar.

console.log(cliente2)








// ****** Adicionando um objeto novo dentro do objeto chave ex: (dependente) que é chave do objeto cliente3   ******  
// ou seja estamos colocando dentro de um objeto que é do tipo array para que possa guardar mais de um objeto.
// lembrando que cada objeto dentro da array dependente é um indice. ou seja objetos podem ser indices de uma array



const cliente3 = {
    //  keys:  valores    
    nome: "André",// dados do tipo estring
    idade: 36,// dados do tipo number
    cpf: "1232456789",// dados do tipo string
    email: "andre@email.com",// dados do tipo estring

    // chave fone = dados do tipo array
    fones: ["321654987", "3216549876"], // Para adicionar uma chave com valores dentro de array precisamos colocar conchetes [] depos da chave


    // obs: por mais que o os objs dentro seja com diversar chave, dentro do objeto dependentes cada obj é um indice.
    // exeplos: dependente:[ { indice 0},{ indice 1},{ indice 2}]. mesmo sabendo que pode ter diversas chaves dentro de cada indice que é um obj
    dependentes: [{// Trasnfomando a chave dependente em um array para que possamos colocar mais de um objeto dentro do mesmo d : [{ obj},{oObjs}]
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}


cliente3.dependentes.push({ // usamos o metodo de array .push para adicionar o novo objeto dentro da array dependente
    nome: " Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

console.log(cliente3)

// Buscando um dado dentro da array dependente  que temo outros objetos dentro


// Criamos uma const para armazenar uma array
const filhaMaisNova = cliente3.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")// Usando o metodo de array .filter para verificar se há dentro do obj cliente3 na chave dependente que é de tipo array verificando na chave de nome dataNasc dos objetos se tem o valor "04/01/2014", se acaso tiver a const filhaMaisNova guarda todos os dados desse objeto encontrado dentro da array dependentes

console.log(filhaMaisNova)// imprimindo toda a const que contem os dados do objeto

console.log(filhaMaisNova[0].nome)// imprimindo o objeto de indice 0 porém só foi guardado na varivel esse objeto conforme o filter. Se tentar imprimir outro indice não existe e será indefinido.








// ******  Criando funções dentro dos objetos   ****** 



const cliente4 = {
    //  keys:  valores    
    nome: "André",// dados do tipo estring
    idade: 36,// dados do tipo number
    cpf: "1232456789",// dados do tipo string
    email: "andre@email.com",// dados do tipo estring

    // chave fone = dados do tipo array
    fones: ["321654987", "3216549876"], // Para adicionar uma chave com valores dentro de array precisamos colocar conchetes [] depos da chave


    // obs: por mais que o os objs dentro seja com diversar chave, dentro do objeto dependentes cada obj é um indice.
    // exeplos: dependente:[ { indice 0},{ indice 1},{ indice 2}]. mesmo sabendo que pode ter diversas chaves dentro de cada indice que é um obj
    dependentes: [{// Trasnfomando a chave dependente em um array para que possamos colocar mais de um objeto dentro do mesmo d : [{ obj},{oObjs}]
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }, {
        nome: " Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
    }],
    saldo: 100,
    depositar: function (valor) {// Usando uma sintaxis classica função() para que possamos modificar a chave saldo

        this.saldo += valor // usando uma palavra reservada this. para referi-se ao objeto

    }
}


console.log(cliente4.saldo);

cliente4.depositar(30);// Adionando valores no saldo apartir da função depositar do obj cliente4

console.log(cliente4.saldo)



//  *****  Verificando as chaves do objeto *****  
// obs: o objeto não tem indice como uma array por este motivo temos que precisamos utilizar um metodo para percorres cada chave do objeto
// obs1: Objetos é uma listas não ordenadas
// como mostrar os dados para as pessoas legitimo para leitura

// utilizando o metodo (for in) para percorrer objetos



let relatorio = "";// criamos uma variavel para guardar o reaultado do (for in)


// Usando o (for in) para percorrer o objeto e listar a cada loop sua chave no (info), assim conseguimos acessar os valores dentro da chave
for (const info in cliente4) {// usando o (for in) e acessando a chave 
    if (typeof cliente4[info] === "object" || typeof cliente4[info] === "function") {// Verificando se dentro do objetos temos outros objetos e function que não necessita demostrar para uma pessoa ler os dados, ou seja estamos filtrando o necessario
        continue// uso do continue para continuar o if 
    } else {// acaso o loop do for contem chaves com dados primitivos, guardamos em uma variavel para mostrar depois 
        relatorio += ` 
      ${info} ==> ${cliente4[info]}
      `
    }
}

console.log(typeof cliente4.depositar)// typeof mostra o tipo de dados que estão sendo armazenado na posição do objeto
console.log(typeof cliente4.dependentes)// typeof mostra o tipo de dados que estão sendo armazenado na posição do objeto
console.log(typeof cliente4.saldo)// typeof mostra o tipo de dados que estão sendo armazenado na posição do objeto
console.log(typeof cliente4.nome)// typeof mostra o tipo de dados que estão sendo armazenado na posição do objeto
console.log(relatorio)





//  *****  Extraindo lista de chaves do objeto  *****



// função que utiliza o metodo de Object.keys para verificar junto com o metodo includes se temos a chave dependente para oferecer o seguro
function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);// Object.keys(objeto) usamos para guardar em uma variavel os nomes de todas as chave dentro do objeto
    if (propsClientes.includes("dependentes")) {// metodo includes para verificar dentro da array a propriedade passada no seu parametro
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}


console.log(Object.keys(cliente4))// usando o Object.keys(obj) conseguimos pegar as chaves e mostrar como uma array
console.log(Object.entries(cliente4))// usando o Object.entries(obj) conseguimos pegar as chaves e os valores do objeto e mostrar como array
console.log(Object.values(cliente4))// usando o Object.values(obj) conseguimos pegar os valores de cada chave dentro do objeto
oferecerSeguro(cliente4)
