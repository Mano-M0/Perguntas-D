let players = [];
let questions = [];
let challenges = [];

// Adiciona campos para cada jogador
function addPlayers() {
  const numPlayers = document.getElementById('players').value;
  const playerInputs = document.getElementById('playerInputs');
  playerInputs.innerHTML = '';

  for (let i = 1; i <= numPlayers; i++) {
    playerInputs.innerHTML += `
      <div>
        <label>Jogador ${i}: Número de Perguntas</label>
        <input type="number" id="player${i}Questions" min="1" required>
        <label>Jogador ${i}: Desafio</label>
        <input type="text" id="player${i}Challenge" required>
      </div>
    `;
  }
}

// Configura o jogo
document.getElementById('setupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const numPlayers = document.getElementById('players').value;

  for (let i = 1; i <= numPlayers; i++) {
    const numQuestions = document.getElementById(`player${i}Questions`).value;
    const challenge = document.getElementById(`player${i}Challenge`).value;

    for (let j = 1; j <= numQuestions; j++) {
      questions.push(prompt(`Jogador ${i}, insira a pergunta ${j}:`));
    }

    challenges.push(challenge);
    players.push(`Jogador ${i}`);
  }

  localStorage.setItem('players', JSON.stringify(players));
  localStorage.setItem('questions', JSON.stringify(questions));
  localStorage.setItem('challenges', JSON.stringify(challenges));

  window.location.href = 'game.html';
});
