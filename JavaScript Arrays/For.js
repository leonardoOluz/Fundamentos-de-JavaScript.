const numeros = [100, 200, 300, 400, 500, 600];


// usando o loop for com varivel 


for (let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i])
}

/* Os laços de repetição, como o for, são ferramentas essenciais na programação. São utilizados para, entre outras coisas, percorrer arrays e executar blocos de código para cada elemento.

Porém, quando usamos for para executar códigos em loop, temos que deixar claro qual é a condição de parada do loop. Caso contrário, o programa não sabe em que momento deve parar de executar o loop, acaba ficando “preso” e entrando em loop infinito.

O loop infinito pode travar seu navegador, o terminal em que o código estiver sendo executado, ou até mesmo o computador, então é importante saber como evitá-lo.

Abaixo temos um exemplo de for que imprime no terminal números de 0 a 10: */

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

/*    O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de parada i <= 10 está correta, a variável i que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (i++). Quando o valor da variável de controle i chega a 11, depois de imprimir o número 10 no terminal, a comparação i <= 10 retorna false e isso encerra o loop.

O loop infinito pode acontecer caso algum dos parâmetros seja passado de forma incorreta ou esteja faltando. Por exemplo o terceiro, responsável por alterar a variável de controle após o bloco de código dentro do for ter sido executado: */


for (let i = 0; i < 10;) {
    console.log(i)
}

/*  A mesma coisa acontecerá se o for for executado sem o segundo parâmetro, que é a condição de parada. */

for (let i = 0; ; i++) {
    console.log(i)
}
/* 
   Outro caso que pode gerar loop infinito é o de alterações feitas na variável de controle dentro do bloco do for, o que não é uma boa prática: */

for (let i = 0; i < 10; i++) {
    i--
    console.log(i)
}
/* IMPORTANTE: Como mencionamos acima, o loop infinito pode travar o terminal ou computador. Se durante seus estudos você perceber que executou um código com loop infinito, finalize a execução do programa o mais rápido possível no terminal pressionando “Ctrl + C”. */
