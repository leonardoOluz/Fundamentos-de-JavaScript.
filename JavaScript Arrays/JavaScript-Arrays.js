// *** Usando uma array com 4 elementos dentro da Arrays de 0 a 3 indice

const notas = [10, 6.5, 8, 7.5]
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media)

// *** Adicionando um elemento novo com o push

const notas1 = [10, 6, 8]
notas1.push(7) // elemento 7 sendo adicionado com push um metodo de adicionar um elemento na array
console.log(notas)

let media1 = (notas1[0] + notas1[1] + notas[2] + notas1[3]) / notas.length
console.log(media1)

// *** Deletando o ultimo elemento com o metodo pop  

const notas2 = [10, 7, 8, 5, 10]
notas2.pop() // usando o metodo pop para excluir o ultimo elemento da array
console.log(notas2)

let media2 = (notas2[0] + notas2[1] + notas2[2] + notas2[3]) / notas2.length
console.log(`A média é ${media2}`)

// *** Dividindo array com o slice

const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = nomes.slice(0, nomes.length / 2); // usando o primeiro paramentros 0 para iniciar o  corte do indice onde o final será a primeira parte do corte da array (obs: necessario passar para uma nova const uma array nova.)
const sala2 = nomes.slice(nomes.length / 2); // dividindo a array em dois e apartir da segunda parte da divisão que se coloca dentro da lista de array (obs: necessario passar para uma nova const uma array nova.)

console.log(`Alunos da sala 1 ${sala1}`)
console.log(`Alunos da sala 2 ${sala2}`)

// *** Removendo elementos e adicionando com o uso do splice

const listaDeChamadas = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

listaDeChamadas.splice(1, 2, 'Rodrigo') // primeiro  paramentro para indicar o indice a começar ser removido, segundo paramentro para indicar quantidades de indice a ser removido apartir do primeiro parametro e o terceiro indice será o indice que vai ser adicionado na lista de array.


listaDeChamadas.splice(2, 0, 'Rodrigo') //Passando o primeiro parametro como indice a iniciar e segundo paramentro 0, conseguimos incluir um elemento passando o terceiro paramentro na posição do primeiro sem retirar nenhum elemento


console.log(`Lista de chamada:  ${listaDeChamadas}`)

// *** Unificando ou juntando as arrays com o concat

const salaDePython = ['Melissa', 'Helena', 'Rodrigo']
const salaDeJavaScript = ['Ju', 'Leo', 'Raquel']
const salaUnificadas = salaDePython.concat(salaDeJavaScript); // passamos logo apos a array que queremos concatenar usando metodo .concat() dentro dele passamos como parametro a array que desejamos concatenar ou juntar.(obs: Necessario o uso de uma const nova para adicionar a concatenação)


console.log(salaUnificadas)


// ***  integrando lista de duas dimensões 

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]; //Adicionando as lista de array dentro de outra array.

for (let i = 0; i < alunos.length; i++) {
    console.log(`O aluno ${listaDeNotasEAlunos[0][i]} tem uma nota de ${listaDeNotasEAlunos[1][i]}`)
}


// *** Usando uma  arrow function para fazer uma busca com o .includes e verificando o indice com o .indexOf


const alunos1 = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos1 = [10, 7, 9, 6]

let listaDeNotasEAlunos1 = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAlunos) => {

    // .includes -> retorno um valor booleano true/false
    // .indeOf -> retorna o valor do indice do elemento ou seja um numero, porisso é bom guarda em uma nova variavel / let 
    if (listaDeNotasEAlunos1[0].includes(nomeDoAlunos)) { // verificando dentro do if com o includes passando o paramentro de nomeDoAlunos
        let indice = listaDeNotasEAlunos1[0].indexOf(nomeDoAlunos) // verificando dentro da listaDeNotasEAlunos o indice do nomeDoAlunos com o metodo.indexOf passando o paramentro nomeDoAlunos(obs: colocar um let para passar o indice dentro de uma variavel)
        return listaDeNotasEAlunos1[0][indice] + ', sua média é ' + listaDeNotasEAlunos1[1][indice]
    } else {
        return "Aluno não está cadastrado "
    }
}

console.log(exibeNomeNota('Juliana'))

// *** Usando um for classico um loop com variavel para mostrar no console

const numeros = [100, 200, 300, 400, 500, 600]

for (let i = 0; i < numeros.length; i++) {
console.log(`Lista ${i} e o valores ${numeros[i]}`)
}


// *** Usando o for para somar todos elementos do array e no final com uma variavel para tirar a media3

const notas3 = [10,6.5,8,7.5]
let somaDasNotas = 0
 
for (let i = 0; i < notas3.length; i++){
    somaDasNotas += notas3[i]    
}

let media3 = somaDasNotas/notas3.length // depois da soma com o for dividimos com a quantidade de elementos dentro da array
console.log(media3)

// *** Usando forEach para tirar uma média 
// **** importante o forEach apenas executa o que ta dentro do bloco não retorna nada

const notas4 = [10,6.5,8,7.5]

let somaDasNotas1 = 0

notas4.forEach(nota => { // callback  é uma função que chama outra função dentro
    somaDasNotas1 += nota
})

let  media4 = somaDasNotas1 / notas4.length
console.log(media4)
 


// *** Revisando CallBacks

const nomes1 = ['Ana','Ju','Leo','Paula']

nomes1.forEach(imprimeNomes) // função de callback recebe outra função dentro no caso aqui é a função imprimeNomes()

function imprimeNomes(nome){
    console.log(nome)
}

// *** Usando o metodo map() para adicionar novos valores numericos em uma nova variavel  

const notas5 = [10,9,8,7,6]
const notasAtualizdas = notas5.map(nota => nota == 10 ? nota : ++nota) // usando o operador ternario dentro da função map()

console.log(notasAtualizdas)


// *** Usando o metodo map() para padronizar os elementos de caracteres dentro da array 

let nomes2 = ['ana Julia', 'Caio vinicius','BIA silva','Roberval silveira']
const nomes2Atualizados = nomes2.map(nome => nome.toUpperCase()) // usando a função callback map() e trasnformando os elementos caracteres da array em maiusculo usando o .toUpperCase()

console.log(nomes2Atualizados)


// *** Usando o .filter() função callback para verificar e filtrar o elemento a baixo do parametros passado para array de notas6

const nomes3 = ['Ana','Marcos','Maria','Mauro']
const notas6 = [7,4.5,8,7.5]
// (nova variavel)  array     ->     [indice]   array  [indice] < 5
const reprovados = nomes3.filter((_, indice) => notas6[indice] < 5 );// com a função .filter() podemos salvar o resultado em uma variavel
console.log(`O aluno: ${reprovados} foi reprovado`)




// *** Utilizando o Reduce para criar uma função podendo ser utilizdo com outras lista de array 
// ** podemos tirar medias apartir da função de callback Reduce

const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum,atual)=> atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala de java Script ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)

 // **  Outra forma de tirar media com o reduce 

 const notas7 = [10,6.5,8,7]
 const media5 = notas7.reduce((acum, atual) => acum + atual, 0)/notas7.length
 console.log(media5)


