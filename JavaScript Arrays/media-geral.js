// Criando uma função para usar a soma do reduce e dividir pela quandtidade de indice (.length) para achar a média 

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) =>
        atual + acum, 0)
    return somaDasNotas / notasDaSala.length
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`);
console.log(`Média da sala de JavaScript ${mediaSala(salaJava)}`);
console.log(`Média da sala de JavaScript ${mediaSala(salaPython)}`);



// Metodo de callback usando o reduce para somar e no final dividir para achar a média
const notas = [10, 6.5, 8, 7]
const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length;

console.log(media);



/* 
Durante a aula trabalhamos com o método reduce() para “reduzir” uma lista de números para um único valor. Este método trabalha com parâmetros um pouco diferentes dos outros que vimos durante o curso. Por isso, vamos destrinchar o exemplo da aula para entender melhor as partes do código.

Em seu editor, crie um arquivo index.js e execute o seguinte código: */

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma) //170


/* O código acima é muito parecido com o que foi feito durante a aula. É importante notar que:

1) O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial - no caso, 0. */

/* 2) A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: O valor acumulado e o valor atual. */

/* 3) A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acum) não precisamos usar chaves e nem da palavra-chave return. */

/* Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários. */

/* Vamos reescrever o reduce() de uma forma um pouco mais extensa para separar melhor as partes do código: */

const somas = numeros.reduce(function (acum, atual) {
    return atual + acum
   }, 0)

 /*   Vendo o código acima, percebe-se melhor onde começam e terminam cada um dos parâmetros do reduce(): O primeiro parâmetro, uma função e o segundo, um número. */

/*  Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce(): */

function operacaoNumerica(acum, atual) {
    return atual + acum
   }
   
   const somass = numeros.reduce(operacaoNumerica, 0)
/* 
   O reduce() roda o loop no array “por baixo dos panos”, executando para cada elemento a instrução passada na função operacaoNumerica.

No dia a dia, a forma que utilizamos no vídeo é a mais usual. Porém, durante seus estudos, você pode praticar da forma que achar mais clara.

É importante lembrar que cada método pode aceitar receber parâmetros diferentes! Alguns são obrigatórios, outros opcionais. Consulte sempre a documentação da linguagem. */
