let userName;
window.onload = function name() {
  let url = window.location.href.split("/");
  url = url[url.length - 1]
  if (url == "index.html") {
    userName = prompt('What is your name?')
  }
}

let detectiveName = `
  <h2 class="fade-in-text"> Hello Detective,</h2>`;
// Entire Story End

console.log(detectiveName);

document.getElementById('detective').innerHTML = detectiveName;

document.querySelector('.start').addEventListener('click', () => {
  window.location.href = "game.html";
});

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('.start');
  const startScreen = document.getElementById('startScreen');
  const gameScreen = document.getElementById('gameScreen');

  startButton.addEventListener('click', () => {
    startScreen.classList.add('d-none');    // hide start screen
    gameScreen.classList.remove('d-none');  // show game screen
  });
});

function openCharacterPage(character) {
  // Open a new page based on the character clicked
  window.location.href = character + '.html'; // Example: 'evelyn.html'
}
