//  metodos map() passando a array para caracteres Maiusculas. com uso do .toUpperCase()

let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase()); // utilizando o metodo .toUpperCase().

console.log(nomesAtualizados);

/* 
Durante essa aula, utilizamos um método específico para strings, o toUpperCase(), para alterar todos os caracteres de cada string do array para letras maiúsculas. Mas e se quisermos acessar somente uma letra? Poderíamos usar um loop para percorrer todas as letras de um string?

“String”, além de ser o tipo de dado usado para representar textos, também se define como uma sequência ordenada de caracteres!

“Lista ordenada” (ou sequência) também é uma forma de definir arrays, certo? Então podemos pensar que, por baixo dos panos, strings são armazenadas em memória da seguinte forma:

const nome = "Alura";
// ["A", "l", "u", "r", "a"]COPIAR CÓDIGO
Ou seja, é possível utilizar alguns métodos de array e laços de repetição para acessar e alterar strings:

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURACOPIAR CÓDIGO

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura
COPIAR CÓDIGO
Você pode conferir a lista completa de métodos de string na documentação do MDN. Confira na lista de links na seção à esquerda da tela e veja se consegue identificar alguns que já utilizamos nas aulas para trabalhar com arrays.

Desafio: Seguindo a mesma lógica, é possível usar métodos modernos, como map() e filter() com strings? */
