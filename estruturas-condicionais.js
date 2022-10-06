// Estruturas condicionais 
// Obs: quando colocamos 0 ou Null consideramos um booleano Falsy / false; quando colocamos 1 ou mais valores é considerado true / truthy;

// if (condicao) {
    // código a ser executado
//   }

const num1 = 10;

if (num1 === null) {
 console.log('número não fornecido');
}

const num2 = 10; // Variável num está com valores pois não está Null 

if (num2 !== null) { // o valor da variável num é diferente de null”) retorna true.
 console.log(`o número é ${num1}`);
}
if (num2) { // se a variavel está com valor dentro então é true, nessa condicional o if será executado
    console.log(`o número é ${num2}`);
} 
const num3 = null; // podemos atribuir o null a variável também 

if (num3 === null) { // desta forma com o uso do operador de igualdade === podemos confirmar que a variavel e seu tipo são NUll ou seja false
 console.log(num2);
}
if (!num3) {
    console.log('número não fornecido');
   }
// Múltiplas condições É possível usar os operadores AND (&&) ou OR (||) para executar o código no if caso uma das condições for verdadeira, ou as duas:

const num4 = 11;

if (num4 > 10 || !num2) {
 console.log('número não válido');// O console exibe a mensagem corretamente, pois uma das condições foi atendida e retornou true (num > 10). Usamos o operador lógico ||, or (ou ou em português) para especificar que a condição do if será validada se apenas uma das condições for verdadeira, mas não necessariamente todas.
}


// Também é possível usar o operador lógico && (and ou e em português) para especificar que a condição do if será validada apenas se todas as condições retornarem true:

const num5 = 11;

if (num5 > 10 && num5 < 20) {
 console.log('número válido');
}

// *** if…else *** ,  Outra forma de condicional muito utilizada é adicionar a cláusula else para ser executada quando a condição do if retorna false. Podemos ler if…else como “se… senão”, como por exemplo “se uma dada condição for verdadeira (true) execute um determinado código; senão, execute outro código”.

function verificaNumero(numero) {

    if (numero > 10) {
      return 'número maior que 10';
    } else {
      return 'número não é maior que 10';
      // Veja que else não leva nenhuma condição entre parênteses, pois é executada automaticamente caso a condição do if retorne false ou um valor “falsy”.
    }
    }
   
   console.log(verificaNumero(9)) //número não é maior que 10

   // No exemplo acima, a comparação numero > 10 retorna false, pois a função foi executada tendo 9 como argumento para num. Assim, o bloco de código dentro do if é ignorado e o interpretador vai direto para o bloco dentro do else.

// *** else if ***, A condicional if…else vai executar um bloco de código entre duas possibilidades, dependendo do resultado da expressão que é passada como condição do if. Porém, em alguns casos é necessário mais de duas opções de fluxo para o código; para estes casos existe a cláusula else if:

const num = 21;

if (num >= 0 && num <= 10) {
  console.log('número entre zero e dez');
} else if (num > 10 && num <= 20) {
  console.log('número entre dez e vinte');
} else if (num > 20 && num <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}

// Veja que a cláusula else if também precisa receber a condição (ou as condições) como parâmetros, ao contrário do else, que deve fechar a cadeia de condicionais e continua sem receber nenhum parâmetro, pois é o código que será executado caso todas as outras condições anteriores falhem.

// IMPORTANTE: Ao trabalhar com múltiplas condições e else if, lembre-se sempre que cada condição e cada bloco (if, else if e else) deve representar condições excludentes entre si! Ou seja, não pode haver ambiguidade entre as condições - uma mesma condição válida tanto no if quanto no else if, por exemplo.
