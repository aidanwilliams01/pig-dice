function Scores(playerId, totalScore, currentScore) {
  this.playerId = playerId;
  this.totalScore = totalScore;
  this.currentScore = currentScore;
}

function diceRoll() {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// Scores.prototype.diceRoll = function() {
  
// }