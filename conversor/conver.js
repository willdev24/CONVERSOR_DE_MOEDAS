
const valor = document.getElementById("moedareal")
const resultadodaconversao = document.getElementById("result")
const valor2 = document.getElementById("moneyuea")
const selecionando = document.getElementById("outros")
const pais = document.getElementById('pais')

const convertendo = conversao =>{

    if(selecionando.value == "001"){

        const foto = document.getElementById("foto02")
        foto.src="./germany.png"
        pais.innerHTML="GERMANY" 
        const num1 = Number(valor.value)

        resultadodaconversao.style.color= 'blue'
        resultadodaconversao.innerText= `R$ ${num1}`

        const conversaofinal= num1 /5.36
        valor2.style.color= 'blue'
        valor2.innerHTML= `€ ${conversaofinal.toFixed(2)}`

    }else if(selecionando.value == "002"){
  
        const foto = document.getElementById("foto02")
        foto.src="./eua.png"
        pais.innerHTML="UEA"     
        const num1 = Number(valor.value)

        resultadodaconversao.style.color= 'blue'
        resultadodaconversao.innerText= `R$ ${num1}`
        
        const conversaofinal= num1 /4.91
        valor2.style.color= 'blue'
        valor2.innerHTML= `U$ ${conversaofinal.toFixed(2)}`
    
    }else{

        const foto = document.getElementById("foto02")
        foto.src="./bitcoin.png"
        pais.innerHTML="bitcoin"
        const num1 = Number(valor.value)

        resultadodaconversao.style.color= 'blue'
        resultadodaconversao.innerText= `R$ ${num1}`
    
        const conversaofinal= num1 /178.727
        valor2.style.color= 'blue'
        valor2.innerHTML= ` ₿ ${conversaofinal.toFixed(2)}`
    
}
return conversao }

const selecionandomoeda = ()=>{}

const converter = document.getElementById("convert")
.addEventListener('click', convertendo)

const moedas = document.getElementById("outros")
.addEventListener('change', selecionandomoeda)


