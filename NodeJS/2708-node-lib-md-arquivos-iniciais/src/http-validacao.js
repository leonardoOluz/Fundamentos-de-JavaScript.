import chalk from "chalk";

function extraiLinks(arrLinks) {
    return arrLinks.map((objectLink) => Object.values(objectLink).join())
}

async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            try {
                const response = await fetch(url)
                return `${response.status} - ${response.statusText}`;
                // return response.status;

            } catch (error) {
                return manejaErros(error)

            }

        })
    )
    return arrStatus;
}

function manejaErros(erro) {    
    if (erro.cause.code === 'ENOTFOUND') {
        return 'Link não encontrado';
    } else {
        return 'Ocorreu algum erro'
    }
}

export default async function listaValidada(listaDelinks) {
    const links = extraiLinks(listaDelinks);
    const status = await checaStatus(links);

    return listaDelinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))

}
