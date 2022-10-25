const livros = require(`./listaLivro`)


function troca1(posicaoAtual,valorMenor) {

    let livroAtual = livros[posicaoAtual];// livroAtual vai receber a propriedade do indice atual 
    let livroMenorPreco = livros[valorMenor];// livroMenorPreco recebe a propriedade de menor preço, recebido pela função o indice de menor valor da propriedade
    livros[posicaoAtual] = livroMenorPreco// o objeto com a propriedade atual recebe o menor valor 
    livros[valorMenor] = livroAtual//  o objeto com a propriedade de menor valor receber a posição atual
}


module.exports = troca1;

// Nessa aula, você aprendeu
// Que um problema pode ser resolvido com algoritmos diferentes, por exemplo, um problema de ordenação resolvido com Selection Sort ou Insertion Sort;
// Que, apesar do resultado final ser o mesmo, o processo (ou passos lógicos) de cada um dos algoritmos é diferente;
// A criar funções para melhor reaproveitamento de código, como para fazer o Insertion Sort receber uma lista de produtos diversos;
// A praticar mais com testes de mesa e ver o código funcionando passo a passo, e como isso pode nos ajudar a entender melhor como o código de um algoritmo funciona.