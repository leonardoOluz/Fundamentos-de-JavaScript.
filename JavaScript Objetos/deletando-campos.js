// *** Deletando um conjunto de chaves / valos

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}
console.log(objPersonagem.aliado)

delete objPersonagem.aliado // Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status)

delete objPersonagem.aliado
delete objPersonagem["status"] // Também é possível utilizar a notação de colchetes:

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

console.log(objPersonagem) // Após remover as duas propriedades acima, o objeto agora está desta forma:


/* {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
   } */

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true


/* O operador delete não remove propriedades herdadas de outro objeto, e aí sim, neste caso, retornará false se tentarmos fazer isso. Vamos entender melhor o tema “heranças” mais adiante no curso. */

