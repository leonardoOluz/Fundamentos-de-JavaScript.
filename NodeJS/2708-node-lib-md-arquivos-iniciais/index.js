import fs from 'fs';
import chalk from 'chalk'; // Formato em uso para importar arquivos, libs e framework.

function pegarArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) =>{
        console.log(chalk.green(texto))
    })
}

pegarArquivo('./arquivos/texto.md')


















// const chalk = require('chalk'); a forma de importar outros arquivos usando o require está ficando em desuso. Entrando no lugar o formato de import nome da variavle from arquivo buscado.



// console.log(chalk.blue('Hello world!'));


// console.log(chalk.yellow('olá mundo'));

// console.log('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer)');
// console.log('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer)');