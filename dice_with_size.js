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
    delayOutput(2);
  }
  console.clear();

  return diceFace(faceValue, size);
}

console.log(rollDice(5, 10));
