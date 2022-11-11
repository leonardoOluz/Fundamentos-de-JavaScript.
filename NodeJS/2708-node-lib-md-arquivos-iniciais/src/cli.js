import pegaArquivo from './index.js';
import chalk from 'chalk';

const caminho = process.argv; //O Node.js tem um objeto próprio, chamado objeto process.

async function processaTexto(caminho) {
    const resultado = await pegaArquivo(caminho[2]);
    console.log(chalk.yellow('lista de links'),resultado);

}

processaTexto(caminho)
