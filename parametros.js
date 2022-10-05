


/* console.log(somaNumero(2,2)); 
console.log(somaNumero(15,50)); 
console.log(somaNumero(245,56)); 
console.log(nomeIdade('Leonardo', 36));
console.log(somaNumero(-500,60)); */


function somaNumero(numero1,numero2) { // função com parâmetros.
    return numero1 + numero2
}

function soma() { // função sem parâmetros
    return 2 + 2
}

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade} anos`
}

function multiplica(numero1 = 1,numero2 = 1) {
    return numero1 * numero2
}
//                                                      //9       X       //6
//                                   = 54
//                    -> 'Leonardo' ,  54
// console.log -> "Meu nome é Leonardo e minha idade é 54 anos"
//
 console.log(nomeIdade('Leonardo',multiplica(somaNumero(4,5))))

// console.log(nomeIdade('Leonardo',multiplica(somaNumero(4,5),somaNumero(3,3))))
