import fs from 'fs';
import chalk from 'chalk'; // Formato em uso para importar arquivos, libs e framework. usado apartir do ES6 ESM

// const chalk = require('chalk'); a forma de importar outros arquivos usando o require está ficando em desuso. Entrando no lugar o formato de import nome da variavle from arquivo buscado.




function trataErro(erro) { // função erro demostrar no terminal o erro
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}




// Promises com then()
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';

    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)

}


//  ******     Função Sincrona     ******
// function pegarArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) =>{
//        if (erro) {
//         trataErro(erro);// se caso aparecer erro chama a função
//        }
//         console.log(chalk.green(texto))
//     })
// }

//pegarArquivo('./arquivos/texto.md')









