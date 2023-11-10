

const list = [

{nome:'Gabriella', idade:18, nacionalidade:'brasileira', vip:true },
{nome:'willy_thiago', idade:23, nacionalidade:'brasileira', vip:true },
{nome:'joao_pedro', idade:18, nacionalidade:'italiano', vip:false },
{nome:'joao_gilherme', idade:15, nacionalidade:'argentino', vip:true },
{nome:'nana_silva', idade:16, nacionalidade:'brasileira', vip:true },
{nome:'mencia_alice', idade:22, nacionalidade:'venezuelano', vip:false },
{nome:'Ariadna', idade:19, nacionalidade:'brasileira', vip:true },
{nome:'Gabriel', idade:13, nacionalidade:'brasileira', vip:false }

]

const newlist = list.map( cliente =>{

    const list = 
    {   nome:cliente.nome, 
        idade:cliente.idade + 2, 
        nacionalidde:cliente.nacionalidade,
        area:cliente.vip ?'opem bar' : 'camarote',
        cliente:cliente.vip ?'bebida liberada' : 'bebida por conta ',
        
    
    }
    return list

})

console.log(newlist)