"use strict";

// console.log(document.querySelector(".sugest").textContent);
/*
document.querySelector(".sugest").textContent = "🎉 Congratulations";

document.querySelector(".number");
document.querySelector(".score");
*/
let highScore = 0;
document.querySelector(".highscore").textContent = highScore;

let score = 20;
document.querySelector(".score").textContent = score;
let randomNumber = () => {
  let secretNumber = Math.floor(Math.random() * 20) + 1;
  return secretNumber;
};
// console.log(randomNumber());
let secretNumber = randomNumber();
console.log(secretNumber);

document.querySelector(".again").addEventListener("click", () => {
  let secretNumber1 = randomNumber();
  console.log(`I am a ${secretNumber1}`);
  secretNumber = secretNumber1;
  document.querySelector(".sugest").textContent = "Start Guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").value = "";
  document.querySelector(".highscore").textContent = highScore;
});

document.querySelector(".check").addEventListener("click", () => {
  let guess = Number(document.querySelector(".number").value);
  if (!guess) {
    document.querySelector(".sugest").textContent = "Please input the number !";
    score = score - 1;
    document.querySelector(".score").textContent = score;
    highScore--;
    document.querySelector(".highscore").textContent = highScore;
    if (score < 1) {
      document.querySelector(".sugest").textContent = "😅 You lost the game !";
      document.querySelector(".score").textContent = 0;
      // document.querySelector(".highscore").textContent = 0;
    }
    if (highScore < 1) {
      document.querySelector(".highscore").textContent = 0;
    }
  } else if (guess === secretNumber) {
    document.querySelector(".sugest").textContent = "🎉 Correct Guess";
    if (score >= highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".sugest").textContent =
        guess > secretNumber ? "Too High !" : "Too Low !";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".sugest").textContent = "😅 You lost the game !";
      document.querySelector(".score").textContent = 0;
    }
  }

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".sugest").textContent = "Too High !";
  //     score = score - 1;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".sugest").textContent = "😅 You lost the game !";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".sugest").textContent = "Too Low !";
  //     score = score - 1;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".sugest").textContent = "😅 You lost the game !";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
