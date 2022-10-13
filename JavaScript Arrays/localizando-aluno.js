// Na lista de notas e alunos o indice é [0]

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

// Na lista de notas e alunos o indice é [1]

const mediasDosAlunos = [10, 7, 9, 6];
//                      *0 [alunos] *1 [mediasDosAlunos]
let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) =>{

    // includes(nomeDoAluno) -> se existir o nome retorna true
    // indexOf(nomeDoAluno) -> retorna o numero do indice que o elemento está procurando 

    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) { // Includes -> booleano: retorna true/false
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)// indexOf retorna o indice da array 
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice];
    }else {
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota('Caio'))
