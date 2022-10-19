/* Há duas formas de acessar o valor de propriedade de um objeto no JavaScript e podemos usar qualquer uma delas. Vamos praticar? Crie um novo objeto colecionador, como fizemos no vídeo. */

/* Crie um novo arquivo “colecionador.js” em seu computador e digite o código abaixo: */

const colecionador = {
    nome: "João do Gibi",
    idade: 41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",
    adicionarTipo: function (propriedade, tipo) {
        this[propriedade].push(tipo)
    }
}

/* Agora, para exibir o valor da propriedade nome, digite: */

console.log(colecionador.nome) // Anotação de ponto muito utilizado nas Linguagens Java e C.

//Em seguida escreva:

console.log(colecionador["nome"])// acessando com uso de colchetes muito similar a acessando um array indexada por um string
/*
Na primeira forma utilizamos a notação de ponto, muito comum em linguagens como Java e C. No segundo exemplo, acessamos usando os colchetes, de modo similar a acessar um array indexado por uma string. No JavaScript, objetos são classificados também como um array associativo (map ou dicionário).

Mas por que é importante saber disso?

Nesta linguagem as propriedades são expressas como strings e podem ser manipuladas em tempo de execução, o que confere uma flexibilidade muito grande na hora de escrever código . Vamos adicionar dinamicamente uma série de tipos de quadrinhos à lista de tipos do objeto colecionador. Adicione ao objeto a função abaixo: */

//  ***  Função adicionada ao Objeto Colecionador *** //

/* adicionarTipo:function(propriedade,tipo){
    this[propriedade].push(tipo)
  } */

/*   Depois vamos adicionar a definição do objeto com o seguinte código: */


for (i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao", "HQ" + i)
}

/*   Usando uma estrutura for conseguimos manipular a propriedade tipocolecao do objeto colecionador, por meio da função adicionarTipo(). Usamos a notação de colchetes junto à palavra reservada this, que faz referência ao próprio objeto. Desse modo, fazemos uso do objeto como um array associativo.

É importante que conheçamos as diversas maneiras que o JavaScript possui para acessarmos os valores das propriedades de um objeto. Uma dessas formas é usando o conceito de array associativo. */

console.log(colecionador)



/* Nessa aula, você aprendeu:
Que para manipular objetos literais podemos utilizar os métodos do JavaScript para cada tipo de dado;
Que os valores em um objeto podem ser tipos primitivos (strings, números, booleanos e null), arrays ou outros objetos;
Que além das propriedades, também podemos atribuir funções que dão comportamento a um objeto. */

