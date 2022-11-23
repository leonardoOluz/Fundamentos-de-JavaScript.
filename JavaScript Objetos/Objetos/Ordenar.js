const clientes = require('./cliente.json');

function ordenar(lista, propriedade, ordem = 'crescente'){
    const resultados = lista.sort((a,b) => {
        if(a[propriedade] < b[propriedade]){
            return -1;
        }
        if(a[propriedade] > b[propriedade]){
            return 1;
        }
        return 0;
    })
    if(ordem !== 'crescente'){
        resultados.reverse();
    }
    return resultados
}
const listOrdenada = ordenar(clientes, 'nome')
// ao trabalharmos com objetos qualquer alteração, sempre estamos alterando a origem 

// const listDecrescente = ordenar(clientes, 'nome', 1)


console.log(listOrdenada)