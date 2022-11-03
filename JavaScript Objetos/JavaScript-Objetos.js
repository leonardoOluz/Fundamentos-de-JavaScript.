//      #  JavaScript Objetos  #


const listaCpfs = ['123456798', '123456465', '123456456'] // uma array sozinha não é capaz de guardar dados necessario para um objeto

const cliente = ["nome", "André", "idade", 36]// com apenas array só podemos guardar os valores dentro


// * Criando um Objeto Cliente *

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
    nome:"Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente2); // imprimindo o objeto cliente2 com seu novo objeto dependentes



//  Como fazer alteração dentro do objeto dependentes que está dentro do objeto cliente2



cliente2.dependentes.nome = "Sara Silva";

console.log(cliente2)