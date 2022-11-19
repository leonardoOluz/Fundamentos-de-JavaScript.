function extraiLinks(arrLinks) {
    return arrLinks.map((objectLink)=> Object.values(objectLink).join())
}

export default function listaValidada(listaDelinks){
    return extraiLinks(listaDelinks)

}

