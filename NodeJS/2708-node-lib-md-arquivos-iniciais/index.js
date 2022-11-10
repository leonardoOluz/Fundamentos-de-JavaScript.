import fs from 'fs';// filesystem biblioteca nativa do Node
import chalk from 'chalk'; // Formato em uso para importar arquivos, libs e framework. usado apartir do ES6 ESM

// const chalk = require('chalk'); a forma de importar outros arquivos usando o require está ficando em desuso. Entrando no lugar o formato de import nome da variavle from arquivo buscado.



//   *****   função erro demostrar no terminal o erro   ******
function trataErro(erro) {
    // uso do throw jogar para fora 
    // new Error junto com o throw estamos lançando um objeto com um novo erro, demostrando o tipo de erro 
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));// usando o erro.code : codigo do erro, mais podemos ver o objeto todo para verificar o que pode ser utilizado.
}


//     *****    async/await   código assincrono  ****** 
async function pegaArquivo(caminhoDoArquivo) {
    // dentro de uma função assincrona podemos usar os blocos try/catch para que possamos tratar das funcionalidades
    try {// try acontece tudo que queremos que aconteça caso de sucesso para receber o arquivo
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    } catch (erro) {// catch recebe o erro podendo trabalhar com ele e usar outras função para tratar 
        trataErro(erro)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }

}

pegaArquivo('./arquivos/texto.md')
pegaArquivo('./arquivos/')


//  ******   Promises com then() código assincrono  *****
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';

    fs.promises// Uso do fs.promises para passar ao javascript que está trabalhando com assincrona
        .readFile(caminhoDoArquivo, encoding)// com o .readFile passamos o parâmetro que deve ser lido pelo metodo e seu segundo parâmentro para dizer que tipo de encode esta usando na leitura.
        .then((texto) => console.log(chalk.green(texto)))// encadeamos a função de callback .then para que ela assim que receber o arquivo de texto pelo .readFile faça um console.log, acaso receba o arquivo obs: o then é uma função para trabalhar com promessas
        .catch(trataErro)// o .catch tbm é uma função de callback preparada para pegar erros do tipo assincrona 
}


// //  ******     Função Sincrona     ******
// function pegarArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) =>{
//        if (erro) {
//         trataErro(erro);// se caso aparecer erro chama a função
//        }
//         console.log(chalk.green(texto))
//     })
// }

// pegarArquivo('./arquivos/texto.md')
