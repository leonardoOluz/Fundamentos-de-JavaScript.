const notas = [10 ,6 ,8]; // array declarado como constante com 3 elementos

notas.push(10); // Função .push para adicionar elementos no ultima indice da lista de arrays precisa passar o parametros
notas.unshift(5); // Função unshift para adicionar elementos na primeira lista de arrays precisar passar o paramentros

console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) + notas[4] / notas.length // media declarada na let media das notas

console.log(media);

// Sempre que precisar adicionar elementos em lista podemos usar a função .push('Elemento'). dessa forma adicionamos um elemento dentro da array, colocando sempre no seu ultimo indice o novo elemento.


