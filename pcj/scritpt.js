let board = document.getElementById("tabuleiro");
let player1 = document.getElementById("player-1");
let player2 = document.getElementById("player-2");

let player1Position = [0, 0];
let player2Position = [0, 0];

function movePlayer(player, position, rowOffset, colOffset) {
  let newRow = position[0] + rowOffset;
  let newCol = position[1] + colOffset;

    if ((newRow === 0 || newRow === 5 || newCol === 0 || newCol === 5) && newRow >= 0 && newRow <= 5 && newCol >= 0 && newCol <= 5) {
    player.remove();
    board.rows[newRow].cells[newCol].appendChild(player);

    position[0] = newRow;
    position[1] = newCol;

    if (newRow === 0 && newCol === 0) {
      document.getElementById("congrats").style.display = "block";
    }
  }
}

function resetGame() {
  player1.remove();
  player2.remove();
  board.rows[0].cells[0].appendChild(player1);
  board.rows[0].cells[0].appendChild(player2);
  player1Position = [0, 0];
  player2Position = [0, 0];
}

document.getElementById("botao-direita-1").addEventListener("click", function() {
  movePlayer(player1, player1Position, 0, 1);
});

document.getElementById("botao-baixo-1").addEventListener("click", function() {
  movePlayer(player1, player1Position, 1, 0);
});

document.getElementById("botao-esquerda-1").addEventListener("click", function() {
  movePlayer(player1, player1Position, 0, -1);
});

document.getElementById("botao-cima-1").addEventListener("click", function() {
  movePlayer(player1, player1Position, -1, 0);
});

document.getElementById("botao-direita-2").addEventListener("click", function() {
  movePlayer(player2, player2Position, 0, 1);
});

document.getElementById("botao-baixo-2").addEventListener("click", function() {
  movePlayer(player2, player2Position, 1, 0);
});

document.getElementById("botao-esquerda-2").addEventListener("click", function() {
  movePlayer(player2, player2Position, 0, -1);
});

document.getElementById("botao-cima-2").addEventListener("click", function() {
  movePlayer(player2, player2Position, -1, 0);
});

document.getElementById("face").addEventListener("click", function() {
  let result = Math.floor(Math.random() * 6) + 1;

  switch(result) {
    case 1: 
      document.getElementById("face").src = "./img/dado/face01.png";
      break;
    case 2: 
      document.getElementById("face").src = "./img/dado/face02.png";
      break;
    case 3: 
      document.getElementById("face").src = "./img/dado/face03.png";
      break;
    case 4: 
      document.getElementById("face").src = "./img/dado/face04.png";
      break;
    case 5: 
      document.getElementById("face").src = "./img/dado/face05.png";
      break;
    case 6: 
      document.getElementById("face").src = "./img/dado/face06.png";
      break;
    default:
      // Caso contrário
      break;
  }
});

document.getElementById("restart").addEventListener("click", function() {
  document.getElementById("congrats").style.display = "none";
  resetGame();
});

document.getElementById("close").addEventListener("click", function() {
  document.getElementById("modal-a").style.display = "none";
  document.getElementById("true").disabled = false;
  document.getElementById("false").disabled = false;
  document.getElementById("feedback").textContent = "";
  document.getElementById("feedback-pergunta").style.display = "none";
  document.getElementById("fechar").style.display = "none";
  document.getElementById("close").style.display = "none";
  document.getElementById("botoes").style.display = "flex";
  document.getElementById("pergunta").style.display = "flex";
});

let questions = [
  {question: "A região de Jaguariaíva surgiu dentro da rota dos tropeiros, pois essa região servia de passagem no trajeto do chamado Caminho do Viamão.", answer: true},
  {question: "O nome de Jaguariaíva é de origem tupi guarani e significa “rio da onça brava”.", answer: true},
  {question: "August Saint-Hilaire foi um famoso naturalista francês, que esteve em visita as terras da fazenda Jaguariaíva em 1820.", answer: true},
  {question: "Jean-Baptiste Debret foi um pintor, desenhista e professor francês, ele quem desenhou a primeira imagem de Jaguariaíva em 1827, chamada de Port de Javuaiaiva.", answer: true},
  {question: "Jaguariaíva em seus primórdios estava sob jurisdição administrativa da Villa de Castro.", answer: true},
  {question: "Foi Dona Isabel Branco e Silva quem oficializou a doação do terreno para o Senhor bom Jesus da Pedra Fria.", answer: true},
  {question: "Foi o Coronel Luciano Carneiro Lobo o primeiro requerente a edificar uma Igreja Matriz na região de Jaguariaíva em orago ao Senhor Bom Jesus da Pedra Fria.", answer: true},
  {question: "A edificação da primeira Igreja Matriz de Jaguariaíva só ocorreu entre os anos de 1863 e 1864.", answer: true},
  {question: "No dia seis de agosto é realizada a festividade em comemoração ao padroeiro de Jaguariaíva, o Senhor Bom Jesus da Pedra Fria.", answer: true},
  {question: "O Santuário do Senhor Bom Jesus da Pedra Fria faz parte da Rota do Rosário.", answer: true},
  {question: "A Praça Isabel Branco e Silva recebeu esse nome em homenagem a doadora das terras para a criação da cidade de Jaguariaíva.", answer: true},
  {question: "Para atravessar a região do Norte Pioneiro foi criado o Ramal do Paranapanema que também passava por Jaguariaíva.", answer: true},
  {question: "Hoje a estação ferroviária recebe o nome de Estação Cidadã Agente Durvalino de Azevedo.", answer: true},
  {question: "Na Estação Cidadã há um memorial ferroviário aberto a visitação.", answer: true},
  {question: "O Frigorífico das Indústrias Reunidas Fábricas Matarazzo foi um importante empreendimento realizado na cidade de Jaguariaíva no início do século XX.", answer: true},
  {question: "O Frigorífico das Indústrias Reunidas Fábricas Matarazzo esteve em operação em Jaguariaíva até o ano de 1964.", answer: true},
  {question: "No início do século XX na área da Cidade Baixa de Jaguariaíva foi construída parte da Estrada de Ferro São Paulo-Rio Grande que ligava a região sudeste com o extremo sul do Brasil.", answer: true},
  {question: "A grande criação de suínos em Jaguariaíva foi um dos aspectos que motivou a instalação de um frigorífico das Indústrias Reunidas Fábricas Matarazzo na cidade.", answer: true},
  {question: "Há um busto do Coronel Luciano Carneiro Lobo na Praça Isabel Branco e Silva. ", answer: false},
  {question: "O coreto da Praça Isabel Branco e Silva nunca precisou passar por reforma, revitalização ou restauração.", answer: false},
  {question: "A Praça Isabel Branco e Silva nunca passou por nenhuma reforma ou revitalização, se encontra exatamente igual ao modelo ao qual foi projetada.", answer: false},
  {question: "A primeira estação ferroviária de Jaguariaíva já foi construída em alvenaria.", answer: false},
  {question: "O motivo que levou a construção da ferrovia em Jaguariaíva foi o empreendimento do Frigorífico Matarazzo.", answer: false},
  {question: "O fechamento da indústria Matarazzo em Jaguariaíva em nada alterou significativamente a qualidade de vida local. ", answer: false},
  {question: "Somente o público masculino era contratado no Frigorífico Matarazzo em Jaguariaíva.", answer: false},
];

let currentPlayer = 1;

document.getElementById("draw1").addEventListener("click", function() {
  currentPlayer = 1;
  drawCard();
});

document.getElementById("true").addEventListener("click", function() {
  checkAnswer(true);
});

document.getElementById("false").addEventListener("click", function() {
  checkAnswer(false);
});

function drawCard() {
  let index = Math.floor(Math.random() * questions.length);
  let question = questions[index].question;

  document.getElementById("question").textContent = question;
  document.getElementById("modal-a").style.display = "block";
}

function checkAnswer(answer) {
  let question = document.getElementById("question").textContent;
  let correctAnswer = questions.find(q => q.question === question).answer;
  let feedback = document.getElementById("feedback");

  if (answer === correctAnswer) {
      feedback.textContent = "Parabéns! Continue jogando o dado.";
  } else {
      feedback.textContent = "Resposta incorreta. Passe a vez para o outro jogador.";
  }

  document.getElementById("true").disabled = true;
  document.getElementById("false").disabled = true;
  document.getElementById("botoes").style.display = "none";
  document.getElementById("pergunta").style.display = "none";
  document.getElementById("feedback-pergunta").style.display = "block";
  document.getElementById("fechar").style.display = "block";
  document.getElementById("close").style.display = "block";
}