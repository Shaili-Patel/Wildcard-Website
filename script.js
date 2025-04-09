let userName = prompt('What is your name?')

let myStory = `
  <h1> Hello Detective ${userName},</h1>`;
// Entire Story End

console.log(myStory);

document.getElementById('story').innerHTML = myStory;