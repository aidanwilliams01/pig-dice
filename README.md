Describe: Scores()

Test: It should return an object with three properties.
Code: new Score('test', 'test', 'test')
Expected Output: Scores {playerId: 'test', totalScore: 'test', currentScore: 'test'}

Describe: diceRoll()

Test: It should return an integer between 1 and 6.
Code: diceRoll()
Expected Output: an integer between 1 and 6

Describe: roll(playerTurn)

Test: It should modify the relevant object or increment the playerTurn variable depending on the value returned by diceRoll.
Code:
let score1 = new Score(0, 0)
roll(1)
score1
Expected Output: Score {totalScore: 0, turnScore: 3}