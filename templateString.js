const nome = 'Leonardo';
const idade = 2022-1986;
const cidadeNascimento = "são paulo";

/* const apresentacao = "Meu nome é " + nome + ', minha idade é ' + idade + ', nasci na cidade de ' + cidadeNascimento */;


// Para usarmos o template temos que usar da forma a baixo com  (` nome  e ${ variavel dentro  } `). ex a baixo
const apresentacao = `Meu nome é ${nome} , minha idade é ${idade} e nasci na cidade de ${cidadeNascimento} .`;

console.log(apresentacao);

