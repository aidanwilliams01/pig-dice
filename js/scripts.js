function Score(totalScore, turnScore) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
}

function diceRoll() {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function roll(playerTurn) {
  let rollAmount = diceRoll();
  if (rollAmount === 1) {
    score1.turnScore = 0;
    return playerTurn += 1;
  }
  else {
    if (playerTurn % 2 != 0) {
      score1.turnScore = score1.turnScore + rollAmount;
    }
    else {
      score2.turnScore = score2.turnScore + rollAmount;
    }
  }
}

function onPageLoad() {
  const form = document.querySelector("form");
  let score1 = new Score(0, 0);
  let score2 = new Score(0, 0);
  let playerTurn = 1;
  function formSubmission(event) {
    event.preventDefault();
    const submissionType = document.activeElement.value;
    if (submissionType === 'roll') {
      roll(playerTurn);
    }
    else {
      
    }
    document.querySelector("p").removeAttribute("class");
    document.querySelector("p").innerText = outputString;
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad);