const listaDeChamada = ['joão', 'Ana', 'Caio','Lara', 'Marjorie', 'Leo'];
console.log(listaDeChamada.length)
// listaDeChamada.splice(1,2,'Rodrigo'); // splice, parametro 1 é o inicio do indice que vai começar a ser remvido e o segundo paramentros é o ultimo indice até onde será removido. já no terceiro parametro você adiciona um novo elemento em um indice
listaDeChamada.splice(2, 0, 'Rodrigo');
console.log(`Lista de chamadas ${listaDeChamada}`);
console.log(listaDeChamada.length); 

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
console.log(animaisDoAquario)
animaisDoAquario.splice(3,2,'🐟')

/* Alternativa correta! Certo! No aquário, o golfinho e o tubarão não estão presentes por conta do código animaisDoAquario.splice(3,2,'🐟'), que remove dois elementos do array, a partir da posição 3. Sendo assim, os elementos com índice 3 e 4 e os dois peixes entraram nas posições definidas pelo splice. */

console.log(animaisDoAquario)

