//            #      Tipos de Dados      #

//   ------------------- Tipo Number ---------------------- //

const meuNumero = 3; 

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoSoma = primeiroNumero + segundoNumero;
const opercaoSubtracao = primeiroNumero - segundoNumero;
const opercaoDivisao = primeiroNumero / segundoNumero;
const opercaoMultiplicacao = primeiroNumero * segundoNumero;

console.log(operacaoSoma,opercaoSubtracao,opercaoDivisao,opercaoMultiplicacao)


// ponto flutuante


const numeroPontoFlutuante = 3.3;
const pontoFlutuantesemZero = .5;

const novaOpercao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOpercao)


// NaN -> Not A Number (Não é um número)

const alura = "Alura";

console.log(alura * primeiroNumero); // JS não reconhece os valores de alura como number



//   Tipos Strings




//........................... tipos primitivos...........................//

const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
//const senha = "senhaSuperSegura456!";
const stringDeNumeros = "34567";

const citacao  = 'Meu nome é ';
const meuNome = "Leonardo Luz";

// concatenação
console.log(citacao + meuNome);
console.log( `${citacao + meuNome}`);

//temple string OU template literal


const cifrao = '\u0024' // Os carcteres ' \u ' são caracteres de escape para sinalizar ao javaScript de que estamos falando de códigos Unicode.
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Trabalhando com strings 


/* const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false */

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase(); // toLowerCase(); -> transforma letra maiuscula em minuscula.

console.log(cidade === inputMinusculo); // true





/* 
Qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome. A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém: */

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

// var num = 15;
// console.log(num.replace(num, /5/, '2'));


const palavra = "abcdefg";


// usando o .includes para verificar os dados incluso na variavel

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i].includes('g')) {
        console.log(palavra[i])
    }
    
}



// Type booloean

// true = verdadeiro,  false = falso


const primeiroNumero1 = 5;
const segundoNumero1 = 5;
let cadastroAtivado = true;

//console.log(primeiroNumero === segundoNumero); // comparação de igualdade 

const texto12 = "Alura";
const texto22 = "alura";
const texto1Minusculo = texto1.toLocaleLowerCase();
console.log(texto1Minusculo === texto2);


//   #   var -> Pode ser declarado em qualquer lugar do codigo pois ele é carregado antes de iniciar o programa
//   ##  var -> devido a possibilidade de declarar em qualquer canto, surge o problema de declarar mais de uma vez não sendo uma boa prática e podendo se comporta de forma não previsivel (bugs)

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;



// # let -> Só conseguimos usar ela depois que declaramos a let



// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//   area = altura * comprimento;
// } else {
//   area = (altura * comprimento) / 2;
// }

// console.log(area)



// # const -> só pode ser declarado com valores a iniciar, pois são valores fixo e tem que ser declarado antes



const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area)

