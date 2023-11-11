
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

    const categoria = cliente =>{

        const newlist = 
        {nome:cliente.nome, 
         idade:cliente.idade, 
         nacionalidade:cliente.nacionalidade, 
         setor:cliente.vip? 'opem bar': 'pista',
         gener:cliente.genero? 'mulher : !!mulher nao paga!! ' : 'homem'
 
        } 

        return newlist
    }

    const miorde18 = idade => idade.idade >= 18

    const idadetotal = (total, valores) => {
       
        const val = total + valores.idade

        return val
    } 



    const lista=list.map(categoria)
                    .filter(miorde18)
                    .reduce(idadetotal,0)
    
                    console.log(`valor total = ${lista}`)