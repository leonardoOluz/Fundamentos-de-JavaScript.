// // Durante a aula, utilizamos a variável valoresMenores na função divideNoPivo(). Vamos analisar esta variável para entender como ocorre a troca de posições no array.

// A primeira coisa que a função divideNoPivo() faz é localizar o pivô no meio do array (no array que usamos na aula é a posição listaLivros[5], ou seja: { titulo: “Rust”, preco: 22 }. Em seguida, chama a função encontraMenores() que vai contar quantos elementos com valor menor que 22 existem no array, para em seguida trocar o pivô de lugar com o elemento que está na posição seguinte à quantidade de elementos menores.

function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)];
    encontraMenores(pivo, array);

    return array;
}

//    Em seguida, é feito um loop para passar os elementos com valor menor que o pivô para a esquerda dele, e os de valor maior para a direita.

// A variável atual guarda o objeto referente ao elemento que será comparado com o valor do pivô, e é dessa variável que pegaremos a propriedade preco.

function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)];
    encontraMenores(pivo, array);
    let valoresMenores = 0;

    for (let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];
    }

    return array;
}

// Chegamos à condicional if, que faz a comparação do preco entre o pivô e o atual. Caso o preço do elemento atual seja menor, chamamos a função trocaLugar para trocar a posição do elemento atual com o elemento na posição valoresMenores - lembrando que o valor inicial dessa variável é 0, o que corresponde ao índice do primeiro elemento do array.

// Em seguida, o valor da variável valoresMenores é incrementado.

function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)];
    encontraMenores(pivo, array);
    let valoresMenores = 0;

    for (let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];
        if (atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(array, analisando, valoresMenores)
            valoresMenores++
        }
    }

    return array;
}

// Destrinchando o intuito da variável valoresMenores: ela está controlando a posição onde serão inseridos os elementos com valores menores que o pivô - lembrando que nesse momento o pivô já está posicionado em seu índice correto.

// Por esse motivo valoresMenores é iniciada no índice 0: durante o laço for, cada elemento do array tem sua propriedade preco comparada com preco do elemento pivô. Quando é encontrado o primeiro elemento com valor menor (PHP no índice 3), o código entra no bloco if e chama a função trocaLugar() passando como parâmetros de troca a posição do elemento atual e a posição 0, que é o valor da variável valoresMenores neste momento da execução.

// Isso vai fazer com que um elemento de valor menor que o pivô assuma o lugar de um elemento de valor maior.

// Ou seja, após a primeira execução da função saímos de:

/* [
    {
        titulo: "Go",
        preco: 45
    },
    {
        titulo: "C++",
        preco: 35
    },
    {
        titulo: "Java",
        preco: 30
    },
    {
        titulo: "PHP",
        preco: 15
    },
    {
        titulo: "Elixir",
        preco: 50
    },
    {
        titulo: "Rust",
        preco: 22
    },
    // restante dos elementos
] */

//    Após o posicionamento do pivô:

/* [
    {
        titulo: "Go",
        preco: 45
    },
    {
        titulo: "C++",
        preco: 35
    },
    {
        titulo: "Rust",
        preco: 22
    },
    {
        titulo: "PHP",
        preco: 15
    },
    {
        titulo: "Elixir",
        preco: 50
    },
    {
        titulo: "Java",
        preco: 30
    },

    // restante dos elementos
   ] */

//    E quando o for chega no quarto elemento (índice 3), localiza pela primeira vez um elemento do array com valor menor que o pivô. Então o valor de valoresMenores é 0 e o elemento PHP de valor 15 trocará de lugar com Go de 45.

/* [
    {
      titulo: "PHP",
      preco: 15
    },
    {
      titulo: "C++",
      preco: 35
    },
    {
      titulo: "Rust",
      preco: 22
    },
    {
      titulo: "Go",
      preco: 45
    },
    {
      titulo: "Elixir",
      preco: 50
    },
    {
      titulo: "Java",
      preco: 30
    }, */
   
    // restante dos elementos

//    Após a troca, valoresMenores é incrementada em 1 (com a linha valoresMenores++). Dessa forma, da próxima vez que o for localizar um elemento com valor menor que o pivô, ele será trocado pelo elemento que está no índice valoresMenores ou seja, 1.

