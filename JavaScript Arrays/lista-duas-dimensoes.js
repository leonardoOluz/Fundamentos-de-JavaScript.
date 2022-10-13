
// Na lista de notas e alunos o indice é [0]

const alunos = ['joão ', 'Juliana ', 'Caio '];

// Na lista de notas e alunos o indice é [1]

const mediasDosAlunos = [10, 7, 9, 6];
//                      *0 [alunos] *1 [mediasDosAlunos]
let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

//           chamando a lista de nomes[0]                chamando a media [1]
// console.log(`${listaDeNotasEAlunos[0][0]}, a sua média é ${listaDeNotasEAlunos[1][0]}`)
//Console a cima a lista de nomes chama indice [0] e a lista de notas chama indice [0]
//                     na lista de nomes chama joão e a lista de notas chama n° 10 .


let idades = [30, 35, 28]
let nomes = ["Ana", "Juliana", "Leonardo"]
let faculdade = [false, true, true]

let funcionarios = [nomes, idades, faculdade]

const exibeFuncionario = (nomeFuncionario) => {
    if (funcionarios[0].includes(nomeFuncionario)) { // usando o .includes para verificar se é true / false
        let indice = funcionarios[0].indexOf(nomeFuncionario)// usando o indexOf para verificar o indice do elemento encontrado
        return `${funcionarios[0][indice]} tem a idade de ${funcionarios[1][indice]} anos`;
    } else {
        return `Funcionario não encontrado !`
    }
}

console.log(exibeFuncionario('Leonardo'));


/* for (let i = 0; i < funcionarios.length; i++) {

    console.log(`A funcionaria ${funcionarios[0][i]} tem a idade de ${funcionarios[1][i]} anos, faz faculdade ? ${funcionarios[2][i]}`);

} */






//console.log(`A funcionaria ${funcionarios[0][1]} tem a idade de ${funcionarios[1][1]} anos, faz faculdade ? ${funcionarios[2][1]}`);

/* O array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. podendo ser:

0 -> nomes
1 -> idades
2 -> faculdade
O segundo colchete será usado para acessar a informação dentro do array escolhido.

Outra forma de chamar os arrays de 2 dimensões é matrizes. Matrizes podem ser visualizadas como uma tabela do Excel, onde cada campo representa um elemento, e precisamos de uma linha e uma coluna para acessar um campo. Então, as linhas são o primeiro colchete e a coluna o segundo colchete.

Arrays têm seu principal uso quando temos uma grande quantidade de informações com propósitos similares, como as notas de um aluno. Matrizes, por sua vez, são utilizadas quando precisamos de vários arrays similares ou com informações ligadas às outras, como as notas de uma classe com vários alunos.

As matrizes não são limitadas a 2 dimensões, podendo ter mais dimensões, de modo que cada dimensão é representada por um colchete. Porém, tome cuidado para não se perder dentro delas, já que se uma matriz passa a ter, por exemplo, 4 ou 5 dimensões, se torna bem difícil saber exatamente o que está sendo acessado e começamos a ter problemas para fazer a manutenção do código. */