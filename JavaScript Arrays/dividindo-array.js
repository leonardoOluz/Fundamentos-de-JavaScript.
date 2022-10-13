const nomes = ['joão','juliana', 'Ana', 'Caio','Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana','André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']


//                      slice -> cortar a array

const sala1 = nomes.slice(0,nomes.length/2); // usamos o metodo slice para dividir uma array e colocar em outra variavel com diversos elementos, podendo usar o indice 0 ate a metade do indice usando o length /2;
const sala2 = nomes.slice(nomes.length/2); // usamos o metodo slice para dividir uma arrayse usar o length /2 ele acrescenta da metade ao final os elemtentos

console.log(`Tamanho da array ${nomes.length}`);

console.log(`Alunos da sala 1 ${sala1}`);
console.log(`Alunos da sala 2 ${sala2}`);
  