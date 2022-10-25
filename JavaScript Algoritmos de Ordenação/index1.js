const objeto = require('./listaLivro')

function objMaiorMenor(obj, condicao) {
    let caroBarato = 0;

    if (condicao) {
        for (let atual = 0; atual < obj.length; atual++) {
            // codigo  
            if (obj[atual].preco < obj[caroBarato].preco) { // verifica se os valores são menores com o menor achado dentro do objeto lista
                caroBarato = atual // guarda o menor valor encontrado dentro indice buscado dentro do objeto
            }
        }

    } else {
        for (let atual = 0; atual < obj.length; atual++) {
            if (obj[atual].preco > obj[caroBarato].preco) {
                caroBarato = atual
            }
        }

    }
return caroBarato
}

console.log(`O livro ${objeto[objMaiorMenor(objeto,false)].titulo} tem o valor de ${objeto[objMaiorMenor(objeto,false)].preco}`)


// console.log(`O livro ${obj[maisCaro].titulo} tem o valor de ${obj[maisCaro].preco} sendo o mais caro da lista`);
// console.log(`O livro mais barato custa ${obj[maisBarato].preco} e o titulo é ${obj[maisBarato].titulo}`)


// Nessa aula, você aprendeu
// Que algoritmos são sequências finitas de passos lógicos para a resolução de um problema e que podem representar tanto problemas comuns em programação quanto qualquer situação que envolva passos lógicos;
// Que pensar de forma algorítmica não se resume a código e nem precisa necessariamente começar pelo código em si;
// Como traduzir os passos de um algoritmo para a linguagem de programação que escolhemos trabalhar (no caso, JavaScript), através de estruturas fundamentais da linguagem como variáveis, laços de repetição e condicionais.


