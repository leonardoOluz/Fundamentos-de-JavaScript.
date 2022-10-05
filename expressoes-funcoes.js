//  Declaração de função 

/* function minhaFuncao(params) {
    return params * 2;
}

minhaFuncao("param"); */



// Expressão de função


//const soma = function(num1, num2){ return num1 + num2};
// console.log(soma(1,1));

// diferença principal : HOISTING
// funcções e var são "Listadas " no top do arquivo

console.log(apresentar());


function apresentar(){
    return "Olá";
}
console.log(soma(1,1));

const soma = function(num1, num2){ return num1 + num2};