let players = JSON.parse(localStorage.getItem('players'));
let questions = JSON.parse(localStorage.getItem('questions'));
let challenges = JSON.parse(localStorage.getItem('challenges'));
let currentQuestionIndex = 0;

// Exibe a próxima pergunta
function nextQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById('question').textContent = questions[currentQuestionIndex];
    currentQuestionIndex++;
  } else {
    window.location.href = 'end.html';
  }
}

// Exibe um desafio aleatório (anônimo)
function showChallenge() {
  const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  alert(`Desafio Anônimo: ${randomChallenge}`);
}

// Inicia o jogo
nextQuestion();
