const marvel = {
    nome: "Vennon",
    dataNasc: "05/09/1980",
    cidadania: "Americano",
    fone: ["05511945457772", "0552122099602"],
    poderes: {
        max: "Devorar",
        medio: "Possuir corpo",
        min: "falar com o hopedeiro"
    },
    parentesco: "Alienigena"
}
let heroi = ["nome", "dataNasc", "cidadania", "fone", "poderes", "parentesco"];


console.log(marvel.parentesco)
console.log(marvel['nome'])

heroi.forEach(heroi => console.log(marvel[heroi]))

console.log(marvel[heroi[2]])

