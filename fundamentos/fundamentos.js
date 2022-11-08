//            #      Tipos de Dados      #

//   ------------------- Tipo Number ---------------------- //

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoSoma = primeiroNumero + segundoNumero;
const opercaoSubtracao = primeiroNumero - segundoNumero;
const opercaoDivisao = primeiroNumero / segundoNumero;
const opercaoMultiplicacao = primeiroNumero * segundoNumero;

console.log(operacaoSoma, opercaoSubtracao, opercaoDivisao, opercaoMultiplicacao)


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

const citacao = 'Meu nome é ';
const meuNome = "Leonardo Luz";

// concatenação
console.log(citacao + meuNome);
console.log(`${citacao + meuNome}`);

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

//                #     Truthy or Falsy

// booleanos 
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

// 0 => false 
// 1 => true

console.log(0 == false);
console.log('' == false);
console.log(1 == true);


// undefined ==> valor indefinido 
// null ==> vazio ou nada
let minhaVar;
let varNull = null;

//console.log(minhaVar);
//console.log(varNull); 

let numero = 3;
let texto = "Alura";
// typeof demostra o tipo de variavel que está sendo guardada na variavel
console.log(typeof minhaVar);
console.log(typeof varNull);



//  CONVERSÃO implicita 

// conversão implicita usando a comparacação de ( == ); -> comparando valores dentros das chaves e variaveis




// Conversão explicita

const numero1 = 456;
const numeroString = Number('456'); // utilizando os conversores antes de declarar a variavel
//Number('456a'); usando uma letra dentro do numero, não é possivel fazer nenhum tipo de calculo pois a conversão não consegue converter

// Number() para converter em numero  
//String() para converter em string

console.log(numero1 + numeroString);


//                                 JavaScript

//    Tipagem Dinamica ->>  Variaveis declarada mais dinamicamente sem necessidade de declarar seu tipo.
//    Tipagem Estatica ->> Variaveis declarada mais estaticamente sem necessario declarar o tipo de variavel (Caracteres, numerico, Bolleano, ponto flutuante)


// JavasScript untyped

// Tipagem dinâmica -> sem necessidade de declarar o tipo pois é dinamico
// multiparadigma ->  Conseguimos resolver o mesmo problemas de varias formas diferente
// Porque se chama JS? ->  A linguagem é bem pouco parecido com o Java, O nome do JavaScript é o EcmaScript.
// O que é ES6 / ES2015 -> versões do JavaScript
// Linguagem interpretada ->  Onde um programa por tras do codigo lé nosso arquivos para executar: obs esse tipo de liguagem é mais lenta porem facil de ler 
// Linguagem compilada    -> Onde o compilador transforma nosso código em linguagem de maquina : obs: esse tipo de liguagem é bem mais rapido porem dificil de ler 
// O que é o NodeJs ? -> É uma ferramenta para que possamos rodar o JavaScript sem a necessidade do navegador. Criada em 2010 



let minhaVar1 = 567 // tipo number
minhaVar1 = "texto" // tipo string
minhaVar1 = true // tipo boolean


//                            Erros no terminal 


//   log -> registro

const variavel = true
console.log('registro')
console.log(123456)
console.log(variavel)


// Tratamento de erro 

console.error('de erro!') // quando necessitamos de demostrar algum erro na aplicação 



//            Operadaores de comparações


//  # O uso do operador de igualdade ==  se refere a ( comparação implicita ), comparando valores independente de seu tipo
// Ex

const n = 5;
const nTexto = "5";
// console.log( n == nTexto ) comparação implicita vcai retornar True


// # O uso do operador de igauldade ===  já faz comparação de igualdade e tipo


// console.log( n === nTexto ) comparação de valores e tipo obs no caso temos um false;

// Podemos utilizar o typeof para verificar o tipo de dado que estamos trabalhando.

// convertendo os dados podemos utilizar 

// Number()
// String()

// Usando Operdador de comparação Ternario:   (Condição-> n  === nTexo) ? (True? -> n++ ): (false? -> nTexto--);
// obs o seu uso é da forma: ternario ->       n >= nTexto ? n++ : nTexto;



//      template literal

// concatenando com variavies 

// podemos usar o template string para concatenar usando acento grave e dentro o sifrão dollar e chaves para passar a variavel
// ex
const tampleString = `Eu sou a template string ${nTexto}`;


//          funções 


// let x = "";
// console.log(x);
// x ="oi";





// Declaração de Função

// String

//  Usando uma função com parametros
function x(texto) { // com parametros x argumentos
  console.log(texto)
}

function somaMais(n1, n2) { // com parametros x argumentos
  return n1 + n2; // retorno tem que ser o ultimo na função pois depois dele não é executado mais nada
}

function x(nome, idade) { // com parametros x argumentos
  return `Meu nome é ${nome} e tenho ${idade}`// lembrando sempre das ordem dos parâmentros
}

// Executa a função 

x('Olá,Mundo!')


// três formas de funções 

// usando uma função sem parâmentros
function soma() { // sem paramentros
  return 2 + 2; // retorno tem que ser o ultimo na função pois depois dele não é executado mais nada
}

console.log(soma())

// usando uma função para chamar outra função

x(soma()) // Uma função chamando outra função 


function multiplica(numero1 = 1, numero2 = 1){ // podemos passar no argumento um valor para acaso não for passado os parâmentros
  return numero1 * numero2
}


// console.log(multiplica(somaMais(4,5),somaMais(3,3)))
console.log(multiplica(somaMais(4,5)))

//       Expressões de funções


//  atribuindo uma função a variavel, importante ser const para não colocar um valor dentro dela e apagando a função no meio do código, não sendo necessario dar no apos a função e podemos deixar a função mais curta.
// é uma função anonima sem nome apenas a declaração da função 
// Obs:  Diferença Principal da expressão de funções : HOISTING
// FUNÇÕES E VAR SÃO * LISTADAS * NO TOPO DO ARQUIVO.   CONST EXPRESSÕES DE FUNÇÕES NÃO.


const somas = function(num1 , num2){return num1 + num2}
console.log(somas(1 , 1))


//           Arraw function   


// Obs: HOISTING
// FUNÇÕES E VAR SÃO * LISTADAS * NO TOPO DO ARQUIVO.   CONST EXPRESSÕES DE FUNÇÕES E ARROW FUNCTION NÃO.
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;



//    Arrow com mais de uma linha de instrução
// Obs: HOISTING
// FUNÇÕES E VAR SÃO * LISTADAS * NO TOPO DO ARQUIVO.   CONST EXPRESSÕES DE FUNÇÕES E ARROW FUNCTION NÃO.
const somaNumerosPequenos = (num1, num2) => {
  if (num1 || num2 > 10) {
    return `somente números de 1 a 9`
  }else{
    return num1 + num2;
  }
}
