const notas = [10, 7 ,8, 5, 10]
console.log(notas); // console antes de tirar o ultimo elemento

notas.shift();// Removendo o primeiro elemento da lista de arrays não precisa passar nenhum parametros.
notas.pop(); //  Removendo o ultimo elemento da lista de arrays não precisa passar nenhum parametros.

console.log(notas); // console depois de tirar o elemento da array
 
let media = (notas[0] + notas[1] + notas[2] + notas[3] )/ notas.length // somando as notas e dividindo para tirar a media



console.log(`A média é ${media}`); // console da media das notas
