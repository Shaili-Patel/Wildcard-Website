let userName = prompt('What is your name?')

let detectiveName = `
  <h1 class="fade-in-text"> Hello Detective ${userName},</h1>`;
// Entire Story End

console.log(detectiveName);

document.getElementById('detective').innerHTML = detectiveName;