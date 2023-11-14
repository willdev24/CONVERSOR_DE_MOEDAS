

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

/* const newlist = list.map( cliente =>{

    const list = 
    {   nome:cliente.nome, 
        idade:cliente.idade + 2, 
        nacionalidde:cliente.nacionalidade,
        area:cliente.vip ?'opem bar' : 'camarote',
        cliente:cliente.vip ?'bebida liberada' : 'bebida por conta ',
        
    
    }
    return list

})*/

const newlist =  cliente =>{

    const list = 
    {   nome:cliente.nome, 
        idade:cliente.idade + 2, 
        nacionalidde:cliente.nacionalidade,
        area:cliente.vip ?'opem bar' : 'camarote',
        cliente:cliente.vip ?'bebida liberada' : 'bebida por conta ',
        genero: cliente.genero? 'feminino' :'masculino'    
    }
    return list

}

const listnova = list.map(newlist)
console.log(listnova)



const filtrando = genero =>{

    return genero.genero

}


const teate = list.filter(filtrando) //quando o filter nao está englobado no map, ele pega a primeira list como base 
console.log(teate)                   //caso contrario ele esteja englobado a lista criada pelo map vira a base do filter e assim sucessivamente


/* ex 1: do filter englobado 

const listnova = list.map(newlist).filter(filtrando)
console.log(listnova)

ex 2

const listnova = list.map(newlist).filter(filtrando).reduci(variavel)
console.log(listnova)

*/

