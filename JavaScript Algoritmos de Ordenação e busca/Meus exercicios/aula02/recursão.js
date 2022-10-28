// Quando pesquisamos sobre recursão, normalmente encontramos duas definições que se completam:

// 1) Um método utilizado para resolver problemas de computação em que a resolução consiste em solucionar instâncias menores do mesmo problema;

// 2) Um método em que uma função ou algoritmo chama a si uma ou mais vezes até que se atinja uma condição específica, quando o resultado de cada repetição é processado desde a última chamada até a primeira.

// Um exemplo interessante de código para ilustrar esse cenário seria o seguinte:

// Abaixo é definida uma função para controlar a frequência com que os números são incrementados durante a execução da função recursiva incrementaNumero(), que será definida a seguir:



function dorme(milissegundos){
    return new Promise(resolve => setTimeout(resolve, milissegundos));
}

// Aqui é definida uma função assíncrona recursiva que incrementa o número passado como parâmetro em uma unidade e, após 2 segundos, chama a si própria antes de encerrar a sua execução, ilustrando efetivamente um caso de recursão:


async function incrementaNumero(numero){
    console.log(numero)
    await dorme(2000)
    return incrementaNumero(numero + 1)
  }
  
  incrementaNumero(1)


//   Para o qual a saída seria:
//   1
//   2
//   3
//   4
//   5


// Como podemos ver, a função incrementa o número passado como parâmetro em uma unidade e, antes de sair, chama a si própria novamente.

// Ainda que o exemplo passado seja uma forma bastante objetiva de demonstrar recursividade, a sua utilização no mundo real não é muito prática já que essa função continuaria realizando o mesmo processo infinitamente - não foi passada nenhuma condição de saída - e não seríamos capazes de retirar valor da sua execução.

// Para solucionar esse problema existem os base cases ou, em português, casos base. Mas o que são esses casos base? São uma forma de passar para a função uma condição de controle para a recursividade ou, em outras palavras, uma condição de saída.

// Segue exemplo de caso base para função recursiva:

// Abaixo é definida uma função para controlar a frequência com que os números são incrementados durante a execução da função recursiva incrementaNumero() que será definida a seguir:

function dorme(milissegundos) {
  return new Promise(resolve => setTimeout(resolve, milissegundos));
}
// COPIAR CÓDIGO
// Aqui é implementada uma função recursiva com caso base:

// async function incrementaNumero(numero){
//   console.log(numero)
//   await dorme(2000)COPIAR CÓDIGO
// Aqui é implementada o caso base(base case) que fará com que a função pare a recursão quando o valor do parâmetro numero for igual a 10:

// async function incrementaNumero(numero){
//   console.log(numero)
//   await dorme(2000)

//   if (numero === 10) {
//           return 'finalizou'
//   }
//   return incrementaNumero(numero + 1)
// }

// incrementaNumero(1)COPIAR CÓDIGO
// A saída então será:

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10 COPIAR CÓDIGO
// É importante lembrar que a função recursiva é aquela que chama a si mesma até encontrar uma condição de saída/parada. A recursividade é uma técnica muito aplicada em estruturas de dados, algoritmos e gráficos.

// Por exemplo, é recursão o efeito de tela infinita que surge em suas chamadas de vídeo ou quando você coloca um espelho em frente ao outro. No entanto, temos a possibilidade e obrigação de inserir uma verificação que interrompa este comportamento, ou então a função entrará em loop infinito.