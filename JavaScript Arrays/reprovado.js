//  Usando o metodo filter();

const nomes = ['Ana', 'Marcos', 'Mauro', 'Leo'];
const notas = [7,4.5,8,3.5];
// filtra por indice     array: aluno      array: notas
const reprovados = nomes.filter((_,indice) => notas [indice] < 5); // 

console.log(`Reprovados:  ${reprovados}`);
