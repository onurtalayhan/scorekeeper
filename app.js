const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore;
let isGameover = false;

p1Button.addEventListener("click", function () {
  if (!isGameover) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameover = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameover) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameover = true;
    }
    p2Display.textContent = p2Score;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameover = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
}
