


const alunos = [
    {nome: 'joao', portugues:6, raciociniologico:8, informatica:2, redaçao:9  },
    {nome: 'will', portugues:8, raciociniologico:5, informatica:3, redaçao:10  },
    {nome: 'gaby', portugues:6, raciociniologico:10, informatica:9, redaçao:6  },
    {nome: 'joao', portugues:7, raciociniologico:9, informatica:10, redaçao:8  },
    {nome: 'ariadina', portugues:5, raciociniologico:8, informatica:4, redaçao:10  },
    {nome: 'anaconda', portugues:8, raciociniologico:10, informatica:5, redaçao:10  },
    {nome: 'lucas', portugues:4, raciociniologico:10, informatica:9, redaçao:4  },

]

alunos.forEach( colocaçao =>  console.log(`a nota total do candidato ${colocaçao.nome} é ${colocaçao.informatica+ colocaçao.portugues +colocaçao.redaçao +colocaçao.raciociniologico}`)   
   
    )