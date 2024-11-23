function diceValue(start, end) {
  return start + Math.ceil(Math.random() * (end - start));
}

function addString(header, main, footer) {
  return header + '\n' + main + '\n' + footer;
}

function repeat(string, times) {
  let repeatedString = '';
  for (let i = 0; i < times; i++) {
    repeatedString += string;
  }

  return repeatedString;
}

function addSpaces(times) {
  let spaces = '';
  for (let i = 0; i < times; i++) {
    spaces += ' ';
  }

  return spaces;
}

function getHeader(size) {
  return '┏' + repeat('━', size - 2) + '┓';
}

function getFooter(size) {
  return '┗' + repeat('━', size - 2) + '┛';
}

function getEmpty(size) {
  return '┃' + addSpaces(size - 2) + '┃';
}

function getTwoDot(size) {
  return '┃ ' + '⚪' + addSpaces(size - 8) + '⚪' + ' ┃';
}

function getLeftDot(size) {
  return '┃ ' + '⚪' + addSpaces(size - 5) + '┃';
}

function getMiddleDot(size) {
  const times = (size - 4) / 2;
  return '┃' + addSpaces(times) + '⚪' + addSpaces(times) + '┃';
}

function getRightDot(size) {
  return '┃' + addSpaces(size - 5) + '⚪' + ' ┃';
}

function getMain(faceValue, EMPTY, TWO_DOT, LEFT_DOT, MIDDLE_DOT, RIGHT_DOT) {
  switch (faceValue) {
    case 1: return addString(EMPTY, MIDDLE_DOT, EMPTY);
    case 2: return addString(LEFT_DOT, EMPTY, RIGHT_DOT);
    case 3: return addString(LEFT_DOT, MIDDLE_DOT, RIGHT_DOT);
    case 4: return addString(TWO_DOT, EMPTY, TWO_DOT);
    case 5: return addString(TWO_DOT, MIDDLE_DOT, TWO_DOT);
    case 6: return addString(TWO_DOT, TWO_DOT, TWO_DOT);
  }
}

function getBody(faceValue, size) {
  const EMPTY = getEmpty(size);
  const TWO_DOT = getTwoDot(size);
  const LEFT_DOT = getLeftDot(size);
  const MIDDLE_DOT = getMiddleDot(size);
  const RIGHT_DOT = getRightDot(size);


  return getMain(faceValue, EMPTY, TWO_DOT, LEFT_DOT, MIDDLE_DOT, RIGHT_DOT);
}

function diceFace(faceValue, size) {
  const header = getHeader(size);
  const main = getBody(faceValue, size);
  const footer = getFooter(size);

  return addString(header, main, footer);
}

function delayOutput(num) {
  for (let i = 0; i < 100000000 * num; i++) {
  }
}

function rollDice(faceValue, size) {
  for (let numberOfTimes = 0; numberOfTimes < 10; numberOfTimes++) {
    const randomFaceValue = diceValue(1, 6);
    console.clear();
    console.log(diceFace(randomFaceValue, size));
    delayOutput(3);
  }
  console.clear();

  return diceFace(faceValue, size);
}

const winningPosition = 20;
let p1Score = 0;
let p2Score = 0;

function getPosition(name, person, diceNumber, winningPosition) {
  const snakeAt5 = 5;
  const ladderAt8 = 8;
  const snakeAt14 = 14;
  const ladderAt15 = 15;
  const snakeAt19 = 19;

  if (person + diceNumber > winningPosition) {
    console.log(name + ' needs: ', winningPosition - person, ' to win 🏆');
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

console.log();
console.log('!!-----YOU ARE GOING TO PLAY SNAKE AND LADDER GAME-----!!');
console.log('       !!🏆-----20 IS THE WINNING POSITION-----🏆!!');
console.log('           !!--🧑‍🦱🧑‍🦱PERSON_1 🆚 PERSON_2🧑🧑--!!');
console.log();

const p1Name = prompt('Enter player_1 name:');
const p2Name = prompt('Enter player_2 name:');


while (p1Score !== winningPosition || p2Score !== winningPosition) {
  prompt('🟢' + p1Name + "'s turn 🧑‍🦱🧑 🎲");
  console.log();
  console.clear();
  let diceNumber = diceValue(1, 6);
  console.log(rollDice(diceNumber, 10));

  p1Score = getPosition(p1Name, p1Score, diceNumber, winningPosition);
  let p1At = '🔥' + p1Name + ' is at 🙋: ' + p1Score;
  let p2At = p2Name + ' is at 🙋: ' + p2Score;
  console.log('\n' + p1At + addSpaces(10) + p2At);
  console.log();

  if (p1Score === 20) {
    console.log('Congratulation!! ' + p1Name + ' 🧑‍🦱🧑 is winner!! 🏆🏆');
    console.log();
    break;
  }

  prompt('🟢 ' + p2Name + "'s turn 🧑‍🦱🧑 🎲");
  diceNumber = diceValue(1, 6);
  console.log(rollDice(diceNumber, 10));

  p2Score = getPosition(p2Name, p2Score, diceNumber, winningPosition);
  p1At = p1Name + ' is at 🙋: ' + p1Score;
  p2At = '🔥' + p2Name + ' is at 🙋: ' + p2Score;
  console.log('\n' + p2At + addSpaces(10) + p1At);
  console.log();

  if (p2Score === 20) {
    console.log('Congratulation!! ' + p2Name + ' 🧑‍🦱🧑 is winner!! 🏆🏆');
    console.log();
    break;
  }

}
