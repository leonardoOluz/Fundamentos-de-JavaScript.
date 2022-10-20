//                       SPREAD OPERATOR

/* No vídeo anterior vimos um exemplo de uso do spread operator, ou sintaxe de espalhamento. Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. Vamos ver mais alguns exemplos: */

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

/* Vamos agora tentar juntar esses dois objetos em apenas um, que vamos chamar de guerreiro. Em um primeiro teste, vamos criar um novo objeto literal com { } e passar para este objeto as variáveis de cada personagem: */

const guerreiro = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro)

/* O resultado no console não é exatamente o que queremos, pois os objetos ainda estão separados; o nome de cada variável agora é uma chave e o valor da chave é cada um dos objetos: */

/* {
    fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
    equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
  } */

/* Aqui entramos com o spread operator, adicionando a sintaxe de três pontos (reticências) antes do nome de cada objeto literal, com cada objeto separado por vírgula: */

const guerreiro1 = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro1)

/* {
    nome: 'Aragorn',
    classe: 'guerreiro',
    espada: 'Andúril',
    capa: 'capa élfica +2'
   } */

   /* Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo: */


   const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
   
    const guerreiro0 = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const ranger = {
    nome: "Legolas",
    classe: "ranger"
   }

/*    Os três objetos acima têm as mesmas propriedades. Vamos ver o que acontece se tentarmos “espalhar” os dados em um único objeto com o spread operator: */

const personagens = { ...mago, ...guerreiro0, ...ranger }
console.log(personagens)

/* O resultado não será bem o que esperamos: */

/* { nome: 'Legolas', classe: 'ranger' } */

/* O JavaScript sobrescreveu as chaves com o mesmo nome a cada ocorrência, assim o resultado final foi somente o último objeto declarado dentro do objeto personagens. */

/* Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas. */

