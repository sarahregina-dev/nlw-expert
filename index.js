const perguntas = [
    {
      pergunta: "Qual é a capital do Japão?",
      respostas: [
        "Tóquio",
        "Pequim",
        "Seul",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o maior oceano do mundo?",
      respostas: [
        "Oceano Atlântico",
        "Oceano Índico",
        "Oceano Pacífico",
      ],
      correta: 2,
    },
    {
      pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
      respostas: [
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      respostas: [
        "Júpiter",
        "Saturno",
        "Netuno",
      ],
      correta: 0,
    },
    {
      pergunta: "Em que ano foi assinada a Declaração de Independência do Brasil?",
      respostas: [
        "1822",
        "1789",
        "1888",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o animal nacional da Austrália?",
      respostas: [
        "Canguru",
        "Koala",
        "Dingo",
      ],
      correta: 0,
    },
    {
      pergunta: "Quem escreveu 'Romeu e Julieta'?",
      respostas: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a montanha mais alta do mundo?",
      respostas: [
        "Monte Everest",
        "Monte McKinley",
        "Monte Kilimanjaro",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o país mais populoso do mundo?",
      respostas: [
        "Índia",
        "China",
        "Estados Unidos",
      ],
      correta: 1,
    },
    {
      pergunta: "Quem foi o líder sul-africano que lutou contra o apartheid?",
      respostas: [
        "Nelson Mandela",
        "Desmond Tutu",
        "Thabo Mbeki",
      ],
      correta: 0,
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template') //copiar o html
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  //laço de repetição
    for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
      
      
      for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
          
          corretas.delete(item)
          if(estaCorreta){
            corretas.add(item)
  
          }
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
      
        quizItem.querySelector('dl').appendChild(dt)
       
      }
      quizItem.querySelector('dl dt').remove()
  
      quiz.appendChild(quizItem) //coloca a pergunta na tela
      //ordem das linhas importa
      
    } 
  
    
  