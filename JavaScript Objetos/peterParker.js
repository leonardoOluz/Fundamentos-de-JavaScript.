const pessoa = {
    nome:"Peter Parker",
    dataNascimento:"25/05/1989",
    carteiraIdentidade:"999362-1",
    email:"peterparker@email.com",
    telefone:"+552711112222",
    cidade:"Cariacica",
    estado:"ES"
 }

 pessoa.cpf = "11111111111-2"; // adicionando CPF

let aranha = ["nome", "dataNascimento", "carteiraIdentidade", "email", "telefone", "cidade", "estado","cpf"]
// console.log(peterParker.endereco.bairro);

console.log(pessoa[aranha[2]]);
aranha.forEach(info => console.log(pessoa[info]));
