const edFolha = [{
    titulo: "PHP",
    preco: 15
}, {
    titulo: "JavaScript",
    preco: 35
}, {
    titulo: "Java",
    preco: 30
}, {
    titulo: "Go",
    preco: 50
}, {
    titulo: "Elixir",
    preco: 45
}
]
const edGalho = [
    {
        titulo: "Python",
        preco: 20
    },
    {
        titulo: "Rust",
        preco: 52
    },
    {
        titulo: "Ruby",
        preco: 28
    },
    {
        titulo: "C#",
        preco: 33
    },
    {
        titulo: "C++",
        preco: 35
    },
    {
        titulo: "Scala",
        preco: 40
    }
]

module.exports = { edFolha, edGalho } // quando há mais de uma lista de objetos dentro do arquivo tem que colocar em bigodes para exportar mais de um objeto 
