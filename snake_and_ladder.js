const snakeAt5 = 5;
const ladderAt8 = 8;
const snakeAt14 = 14;
const ladderAt15 = 15;
const snakeAt19 = 19;
const winningPosition = 20;


let diceNumber = 0;
let person1Score = 0;
let person2Score = 0;

function getDiceRoll() {
  return Math.ceil(Math.random() * 6);
}

function getPosition(person, diceNumber, winningPosition) {
  if (person + diceNumber > winningPosition) {
    console.log(' YOU NEED:', winningPosition - person, 'TO WIN');
    return 0;
  }
  if (person + diceNumber <= winningPosition) {
    person = person + diceNumber;
  }
  if (person === snakeAt5) {
    console.log(' BITTEN BY SNAKE 🐍 AT: 5');
    return person - 4;
  }
  if (person === ladderAt8) {
    console.log(' BITTEN BY SNAKE 🐍 AT: 8');
    return person - 5;
  }
  if (person === snakeAt14) {
    console.log(' BITTEN BY SNAKE 🐍 AT: 14');
    return person - 7;
  }
  if (person === ladderAt15) {
    console.log(' YOU GOT LADDER 🪜 AT: 15');
    return person + 3;
  }
  if (person === snakeAt19) {
    console.log(' BITTEN BY SNAKE 🐍 AT: 19');
    return person - 16;
  }
  return person;
}

console.log();
console.log('!!-----YOU ARE GOING TO PLAY SNAKE AND LADDER GAME-----!!');
console.log('!!🏆-----20 IS THE WINNING POSITION-----🏆!!');
console.log('!!🧑‍🦱🧑‍🦱PERSON_1 🆚 PERSON_2🧑🧑!!');
console.log();

const p1Name = prompt('Enter player_1 name:');
const p2Name = prompt('Enter player_2 name:');


while (person1Score !== winningPosition || person2Score !== winningPosition) {
  prompt(p1Name + "'s tern 🧑‍🦱🧑 🎲");
  console.log();
  console.clear();
  diceNumber = getDiceRoll();

  console.log(p1Name + ' got 🎲:' + diceNumber);
  person1Score = getPosition(person1Score, diceNumber, winningPosition);
  console.log(p1Name + ' is at 🙋: ' + person1Score);
  console.log();

  if (person1Score === 20) {
    console.log('Congratulation!! ' + p1Name + ' 🧑‍🦱🧑 IS WINNER!! 🏆🏆');
    console.log();
    break;
  }

  prompt(p2Name + "'s tern 🧑‍🦱🧑 🎲");
  diceNumber = getDiceRoll();

  console.log();
  console.log(p2Name + ' got 🎲:' + diceNumber);
  person2Score = getPosition(person2Score, diceNumber, winningPosition);
  console.log(p2Name + ' is at 🙋: ' + person2Score);
  console.log();

  if (person2Score === 20) {
    console.log('Congratulation!! ' + p2Name + ' 🧑‍🦱🧑 IS WINNER!! 🏆🏆');
    console.log();
    break;
  }

}



