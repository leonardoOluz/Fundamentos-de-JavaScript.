const idadeMinima = 18;
const idadeCliente = 19;
//                  condições         ?    true   :  false
console.log(idadeCliente>=idadeMinima ? 'cerbeja' : 'suco' ) // uso do operador ternario
// não é recomendado o uso para grande codigos para ter uma facil leitura se usa mais o if.

if (idadeCliente >= idadeMinima) {
    console.log("cerveja")
} else {
    console.log('suco')
}


