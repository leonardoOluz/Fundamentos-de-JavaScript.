function extraiLinks(arrLinks) {
    return arrLinks.map((objectLink) => Object.values(objectLink).join())
}

async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            const response = await fetch(url)
            return response.status;
        })
    )
    return arrStatus;
}

export default async function listaValidada(listaDelinks) {
    const links = extraiLinks(listaDelinks)
    const status = await checaStatus(links)
    console.log(status)
    return status

}


// [gatinho salsicha](http://gatinhosalsicha.com.br/)