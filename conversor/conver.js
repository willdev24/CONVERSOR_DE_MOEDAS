
const valor = document.getElementById("moedareal")
const resultadodaconversao = document.getElementById("result")
const valor2 = document.getElementById("moneyuea")
const selecionando = document.getElementById("outros")



const convertendo = conversao =>{

    if(selecionando.value == "001"){

        const num1 = Number(valor.value)

        resultadodaconversao.style.color= 'blue'
        resultadodaconversao.innerText= `R$ ${num1}`

        const conversaofinal= num1 /5.36
        valor2.style.color= 'blue'
        valor2.innerHTML= `€ ${conversaofinal}`

    }else if(selecionando.value == "002"){

        const num1 = Number(valor.value)

        resultadodaconversao.style.color= 'blue'
        resultadodaconversao.innerText= `R$ ${num1}`
        
        const conversaofinal= num1 /4.91
        valor2.style.color= 'blue'
        valor2.innerHTML= `U$ ${conversaofinal}`
    
    }else{

        const num1 = Number(valor.value)

        resultadodaconversao.style.color= 'blue'
        resultadodaconversao.innerText= `R$ ${num1}`
    
        const conversaofinal= num1 /178.727
        valor2.style.color= 'blue'
        valor2.innerHTML= ` ₿ ${conversaofinal}`
    
}

}


const selecionandomoeda = ()=>{



}

const converter = document.getElementById("convert")
.addEventListener('click', convertendo)

const moedas = document.getElementById("outros")
.addEventListener('change', selecionandomoeda)


