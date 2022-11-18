import pegaArquivo from './index.js';
import fs from 'fs';
import chalk from 'chalk';

const caminho = process.argv; //O Node.js tem um objeto próprio, chamado objeto process.

function imprimeLista(resultado, identificador = ''){
    console.log(
        chalk.yellow(`Lista de links`),
        chalk.black.bgGreen(identificador),
        resultado);
}


async function processaTexto(argumentos) {
    const caminho = argumentos[2];

    // Verificando se há um caminho ou diretorio 
    try {
        fs.lstatSync(caminho);
    } catch(erro) {
        if (erro.code === 'ENOENT') {
            console.log('Arquivo ou diretorio não existe!')
            return
        }
    }
    // condições composta para verificar se é arquivo ou diretorio
    if (fs.lstatSync(caminho).isFile()) {// tratando um arquivo
        
        const resultado = await pegaArquivo(argumentos[2]);// pegarArquivo retorna uma promessa porisso o uso do async/await
        imprimeLista(resultado)

    } else if (fs.lstatSync(caminho).isDirectory()) {// tratando um diretorio
        
        const arquivos = await fs.promises.readdir(caminho)
       // passamos para o forEach que estamos trabalhando com promessas passando o async/await
        arquivos.forEach( async(nomeDeArquivo) => { // usando um forEach para percorrer cada arquivo dentro do diretorio
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
          imprimeLista(lista, nomeDeArquivo)
        
        })        
    }       
}

processaTexto(caminho)
