const numero1 = document.querySelector('.num1')
const numero2 = document.querySelector('.num2')
const resp = document.querySelector('.resp')
const tipoCalc = document.querySelector('.tipocalc')
let resposta

function somar() {
    resposta = Number(numero1.value) + Number(numero2.value) 
    tipoCalc.innerHTML ='O calculo de soma é ' + resposta 
    resp.innerHTML = ` Resultado: ${resposta} `
}
function subtrair() {
    resposta = Number(numero1.value) - Number(numero2.value)
    tipoCalc.innerHTML = 'O calculo de Subtração é ' + resposta 
    resp.innerHTML = 'Resultado: '+ resposta
}
function dividir() {
    resposta = Number(numero1.value) / Number(numero2.value)
    tipoCalc.innerHTML = 'Calculo de divisão é ' + resposta
    resp.innerHTML = 'Resultado: '+ resposta
}
function multiplicar() {
    resposta = Number(numero1.value) * Number(numero2.value)
    tipoCalc.innerHTML = 'Calculo de multiplicação é ' + resposta
    resp.innerHTML = 'Resultado: '+ resposta
}