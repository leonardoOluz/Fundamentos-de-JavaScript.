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

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

var num = 15;
alert(String.replace(num, /5/, '2'));
