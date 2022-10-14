// Usando o Metodo map(); para adicionar ++ em uma função ternario atualizando lista de notas até 10.


const notas = [10,9,8,7,6];
                                  // usando o ternario dentro do map();
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota) // usando a função map() retorna para uma nova array atualizada

console.log(notasAtualizadas);
