// Durante o curso vamos usar o for para escrever os laços de repetição. Esta forma de escrever laços é muito comum em linguagens de programação e pode ser encontrada praticamente da mesma forma tanto no JavaScript quanto em outras linguagens muito utilizadas, como o Java e a família C (C, C++, C#, entre outras). Assim como o for, a maior parte dessas linguagens, além de várias outras, também utiliza os laços while e do… while.

// O JavaScript tem outras formas de escrever laços de repetição além desse for “clássico” e podemos reescrever o nosso código para testar com um método mais moderno, o forEach().

// forEach() é um método de array do JavaScript que percorre o array e executa um bloco de código para cada índice.

// Este método pede como parâmetro uma função que chamamos de{ função callback.} Esta função callback controla o laço para que percorra cada um dos elementos do array, através do parâmetro que estamos chamando de livro (afinal de contas, trata-se de um array de livros):

livros.forEach((livro) => {
    // código aqui
})



// Agora podemos passar para dentro do bloco a lógica do algoritmo, substituindo atual por indice:

livros.forEach((livro, indice) => {
    let menor = menorValor(livros, indice)

    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];

    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual
})

// Se examinarmos o laço, vemos que o primeiro parâmetro da função callback, livro, não está sendo utilizado; nesse caso, podemos usar a notação do JavaScript para informar que o primeiro parâmetro não será utilizado no código, através do _:

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)

    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];

    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual
})

console.log(livros)

// Agora é só testar com node selectionSort.js.



// Nessa aula, você aprendeu
// Que, da mesma forma que criamos “algoritmos mentais” para encontrar o menor valor de uma lista, fazemos um processo parecido para ordenar uma lista;
// Como podemos abstrair os passos que fazemos “de cabeça” para código, observando a sequência dos passos utilizados;
// Que, para resolver um problema, muitas vezes utilizamos mais de um algoritmo; para resolver isso, criamos a função menorValor() para reaproveitar o código junto com o Selection Sort.



