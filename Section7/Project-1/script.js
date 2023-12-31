"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  //
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";

    // When player wins
    //
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // When guess is to high
    //
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the  game!";
      document.querySelector(".score").textContent = 0;
    }
    // When guess is to low
    //
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉 Too low!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
