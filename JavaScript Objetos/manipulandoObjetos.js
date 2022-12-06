/* Trabalhar com objetos no Javascript permite que utilizemos diversos tipos de dados, desde primitivos (string, number, bool) até tipos mais elaborados como arrays ou outros objetos. Observe o código abaixo: */

const cliente = {
    nome: "Jose",
    idade: 33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
}
cliente.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true
}]
cliente.animalEstimacao.push({
    nome: "Lex",
    raça: "Gato",
    vacinado: false
})

const animal = cliente.animalEstimacao.filter(bicho => bicho.raça.includes("Cão"))
console.log(animal[0].nome)
console.log(animal)
