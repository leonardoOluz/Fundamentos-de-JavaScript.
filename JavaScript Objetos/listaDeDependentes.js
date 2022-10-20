/* Nesta aula vimos maneiras bem interessantes de se trabalhar com objetos no JavaScript. Uma delas foi a utilização do Spread Operator, que permite espalhar as informações de um array de objetos em um outro array. Vamos praticar? Inicie criando um novo array de objetos Cliente.

VER OPINIÃO DO INSTRUTOR
Opinião do instrutor

De volta ao exemplo de uma lista de clientes que possui como propriedade uma lista de dependentes, vamos decompor os dependentes em uma nova lista utilizando o Spread Operator. Crie um novo arquivo nomeado como listaDependentes.js e adicione o código abaixo: */

const clientes = [
    {
      nome: "André",
      cpf: "12312312312",
      dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
       },
       {
        nome: "Samia",
        parentesco: "filha",
        dataNasc: "04/01/2014"
       }],
    },
    {
      nome: "Juliana",
      cpf: "56767867867",
      dependentes: [{
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020"
       }],
    }
   ]


 /*  Agora usando a sintaxe de espalhamento, após a definição da lista escreva o seguinte código: */


 const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

/* Usando a sintaxe de espalhamento … (3 pontos) vamos acessar o cliente na primeira posição do array de dependentes. Assim espalharemos o conteúdo do array de dependentes do objeto cliente na definição do novo array listaDependentes. Repetiremos o processo para a lista de dependentes do cliente na segunda posição.

Por fim, utilizando a função console.table() exibimos no console de maneira tabular o conteúdo de listaDependentes. Portanto, após a definição do array, escreva: */

console.table(listaDependentes)


/* Pratique bastante e pense em outros exemplos para testar a utilização da sintaxe de espalhamento. */


/* Nesta aula, você aprendeu:

* Como percorrer objetos a partir das chaves com for...in, iterando sobre as propriedades de um objeto como em um array;
* Que para extrair chaves e valores de objetos é possível utilizar métodos de Object;
* Que funções como .entries, .key e .value podem ser úteis na hora de trabalhar com objetos;
Que o spread operator (ou sintaxe de espalhamento) pode ser uma opção para decompor objetos quando precisamos extraí-los de um array e formar um novo array. */
