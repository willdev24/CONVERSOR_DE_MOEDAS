
const valor = document.getElementById("moedareal")
const resultadodaconversao = document.getElementById("result")
const valor2 = document.getElementById("moneyuea")


const convertendo = conversao =>{

const num1 = Number(valor.value)

  resultadodaconversao.style.color= 'blue'
  resultadodaconversao.innerText= `R$ ${num1}`

const conversaofinal= num1 /5
valor2.style.color= 'blue'
valor2.innerHTML= `U$ ${conversaofinal}`


}

function selecionandomoeda(){
    const selecionando = document.querySelector("#outros")
const optiovalue = selecionando.options[selecionando.selectedindex];


}

const converter = document.getElementById("convert")
.addEventListener('click', convertendo)

