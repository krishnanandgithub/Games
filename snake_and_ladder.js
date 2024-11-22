const winningPosition = 20;

let diceNumber = 0;
let person1Score = 0;
let person2Score = 0;

function getPosition(name, person, diceNumber, winningPosition) {
  const snakeAt5 = 5;
  const ladderAt8 = 8;
  const snakeAt14 = 14;
  const ladderAt15 = 15;
  const snakeAt19 = 19;

  if (person + diceNumber > winningPosition) {
    console.log(name + ' needs: ', winningPosition - person , ' to win 🏆');
    return person;
  }
  if (person + diceNumber <= winningPosition) {
    person = person + diceNumber;
  }
  if (person === snakeAt5) {
    console.log(name + ' bitten by snake 🐍 at: 5');
    return person - 4;
  }
  if (person === ladderAt8) {
    console.log(name + ' bitten by snake 🐍 at: 8');
    return person - 5;
  }
  if (person === snakeAt14) {
    console.log(name + ' bitten by snake 🐍 at: 14');
    return person - 7;
  }
  if (person === ladderAt15) {
    console.log(name + ' got ladder 🪜 AT: 15');
    return person + 3;
  }
  if (person === snakeAt19) {
    console.log(name + ' bitten by snake 🐍 at: 19');
    return person - 16;
  }
  return person;
}

function getDiceRoll() {
  return Math.ceil(Math.random() * 6);
}

function diceFor1() {
  const row1 = '┏━━━━━━━━┓\n';
  const row2 = '┃        ┃\n';
  const row3 = '┃   🔴   ┃\n';
  const row4 = '┃        ┃\n';
  const row5 = '┗━━━━━━━━┛\n';

  console.log(row1 + row2 + row3 + row4 + row5)
  return 1;
}

function diceFor2() {
  const row1 = '┏━━━━━━━━┓\n';
  const row2 = '┃ ⚪     ┃\n';
  const row3 = '┃        ┃\n';
  const row4 = '┃     ⚪ ┃\n';
  const row5 = '┗━━━━━━━━┛\n';

  console.log(row1 + row2 + row3 + row4 + row5)
  return 2;
}

function diceFor3() {
  const row1 = '┏━━━━━━━━┓\n';
  const row2 = '┃ ⚪     ┃\n';
  const row3 = '┃   ⚪   ┃\n';
  const row4 = '┃     ⚪ ┃\n';
  const row5 = '┗━━━━━━━━┛\n';

  console.log(row1 + row2 + row3 + row4 + row5)
  return 3;
}

function diceFor4() {
  const row1 = '┏━━━━━━━━┓\n';
  const row2 = '┃ ⚪  ⚪ ┃\n';
  const row3 = '┃        ┃\n';
  const row4 = '┃ ⚪  ⚪ ┃\n';
  const row5 = '┗━━━━━━━━┛\n';

  console.log(row1 + row2 + row3 + row4 + row5)
  return 4;
}

function diceFor5() {
  const row1 = '┏━━━━━━━━┓\n';
  const row2 = '┃ ⚪  ⚪ ┃\n';
  const row3 = '┃   ⚪   ┃\n';
  const row4 = '┃ ⚪  ⚪ ┃\n';
  const row5 = '┗━━━━━━━━┛\n';

  console.log(row1 + row2 + row3 + row4 + row5)
  return 5;
}

function diceFor6() {
  const row1 = '┏━━━━━━━━┓\n';
  const row2 = '┃ ⚪  ⚪ ┃\n';
  const row3 = '┃ ⚪  ⚪ ┃\n';
  const row4 = '┃ ⚪  ⚪ ┃\n';
  const row5 = '┗━━━━━━━━┛\n';

  console.log(row1 + row2 + row3 + row4 + row5)
  return 6;
}

function delayOutput(num) {
  for (let i = 0; i < 100000000 * num; i++) {
  }
}

function diceRolledOutput() {
  switch (getDiceRoll()) {
    case 1: return diceFor1();
    case 2: return diceFor2();
    case 3: return diceFor3();
    case 4: return diceFor4();
    case 5: return diceFor5();
    case 6: return diceFor6();
  }
}

function rollDice() {
  for (let numberOfTimes = 0; numberOfTimes < 10; numberOfTimes++) {
    delayOutput(2);
    console.clear();
    diceRolledOutput();
  }
  console.clear();
  
  return (diceRolledOutput());
}


console.log();
console.log('!!-----YOU ARE GOING TO PLAY SNAKE AND LADDER GAME-----!!');
console.log('!!🏆-----20 IS THE WINNING POSITION-----🏆!!');
console.log('!!🧑‍🦱🧑‍🦱PERSON_1 🆚 PERSON_2🧑🧑!!');
console.log();

const p1Name = prompt('Enter player_1 name:');
const p2Name = prompt('Enter player_2 name:');


while (person1Score !== winningPosition || person2Score !== winningPosition) {
  prompt(p1Name + "'s turn 🧑‍🦱🧑 🎲");
  console.log();
  console.clear();
  diceNumber = rollDice();

  console.log(p1Name + ' got 🎲:' + diceNumber);
  person1Score = getPosition(p1Name, person1Score, diceNumber, winningPosition);
  console.log(p1Name + ' is at 🙋: ' + person1Score);
  console.log();

  if (person1Score === 20) {
    console.log('Congratulation!! ' + p1Name + ' 🧑‍🦱🧑 is winner!! 🏆🏆');
    console.log();
    break;
  }

  prompt(p2Name + "'s turn 🧑‍🦱🧑 🎲");
  diceNumber = rollDice();

  console.log();
  console.log(p2Name + ' got 🎲:' + diceNumber);
  person2Score = getPosition(p2Name, person2Score, diceNumber, winningPosition);
  console.log(p2Name + ' is at 🙋: ' + person2Score);
  console.log();

  if (person2Score === 20) {
    console.log('Congratulation!! ' + p2Name + ' 🧑‍🦱🧑 is winner!! 🏆🏆');
    console.log();
    break;
  }

}



