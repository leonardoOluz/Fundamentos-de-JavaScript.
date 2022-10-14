//     Funções CallBacks.

const nomes = ['Ana', 'Ju', 'Leo', 'Paula'];

nomes.forEach(imprimeNomes); // Funções forEach só aceita uma function dentro do seus paramentros

function imprimeNomes(nome){ // Function normal
    console.log(nome);
}
