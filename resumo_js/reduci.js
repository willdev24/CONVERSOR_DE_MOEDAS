


const list = [

    {nome:'Gabriella', idade:18, nacionalidade:'brasileira', vip:true , genero:true},
    {nome:'willy_thiago', idade:23, nacionalidade:'brasileira', vip:true ,genero:false},
    {nome:'joao_pedro', idade:18, nacionalidade:'italiano', vip:false ,genero:false},
    {nome:'joao_gilherme', idade:15, nacionalidade:'argentino', vip:true ,genero:false},
    {nome:'nana_silva', idade:16, nacionalidade:'brasileira', vip:true ,genero:true},
    {nome:'mencia_alice', idade:22, nacionalidade:'venezuelano', vip:false ,genero:true},
    {nome:'Ariadna', idade:19, nacionalidade:'brasileira', vip:true ,genero:true},
    {nome:'Gabriel', idade:13, nacionalidade:'brasileira', vip:false ,genero:false}
    
    ]

    const valortotal = (total , valores) =>{

       const valor = total + valores.idade
      return valor

    } 


    const newvalor = list.reduce(valortotal,0)
    console.log(`o valor total de idades ${newvalor}`)
    