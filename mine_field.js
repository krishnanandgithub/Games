function getLuckyNumber(start, end) {
  return start + Math.ceil(Math.random() * (end - start));
}

function charToBeAdd(string, char, curIndex, position) {
  return curIndex === position ? char : string[curIndex];
}

function replaceCharAt(string, char, position) {
  let replacedString = '';
  for (let index = 0; index < string.length; index++) {
    replacedString += charToBeAdd(string, char, index, position * 2);
  }

  return replacedString;
}

function repeat(string, times) {
  let repeatedString = '';
  for (let i = 0; i < times; i++) {
    repeatedString += string;
  }

  return repeatedString;
}

function getMineField(index) {
  const field = repeat((repeat('⬜️', 9) + ' \n'), 8) + repeat('⬜️', 9);

  return replaceCharAt(field, '🏃🏻‍♂️‍➡️', index) + '🏆\n' + hint();
}

function getBombedField(index) {
  const field = repeat((repeat('⬜️', 9) + ' \n'), 9);

  return replaceCharAt(field, '💥', index) + '🏆\n' + hint();
}

function isInputValid(input) {
  return input === 'a' || input === 's' || input === 'd' || input === 'w';
}

function readInputs() {
  const input = prompt('👉 Enter valid key: ');
  if (isInputValid(input)) {
    return input;
  }
  console.log('🚫 Invalid input');

  return readInputs();
}

function hint() {
  const upButton = '  w       ⏫️\n';
  const leftRightButton = 'a   d   ⏪️  ⏩️\n';
  const downBotton = '  s       ⏬️\n';

  return upButton + leftRightButton + downBotton;
}



function getCurrentIndex(choice, index) {
  switch (choice) {
    case 'a': return index - 1;
    case 's': return index + 10;
    case 'd': return index + 1;
    case 'w': return index - 10;
  }
}

function underlineBottom(text) {
  let dash = '+';
  for (let index = 0; index < text.length - 2; index++) {
    dash += '-';
  }
  dash += '+';

  return text + '\n' + dash;
}

function greet() {
  const greetMsg1 = 'WELCOME! to ';
  const greetMsg2 = 'MINE FIELD';

  return underlineBottom(greetMsg1 + greetMsg2);
}

function isIndexInRange(index) {
  const invalidIndexs = [9, 19, 29, 39, 49, 59, 69, 79];
  for (let i = 0; i < invalidIndexs.length; i++) {
    if (invalidIndexs[i] === index) {
      return false;
    }
  }

  return true;
}


function isIndexValid(index) {
  return index >= 0 && index <= 88 && isIndexInRange(index);
}

function getValidIndex(index) {
  const choice = readInputs();
  const curIndex = getCurrentIndex(choice, index);
  if (isIndexValid(curIndex)) {
    return curIndex;
  }
  console.log('\n🚫 Invalid move!');

  return getValidIndex(index);
}

function getPath() {
  const pathChoice = getLuckyNumber(0, 1);
  switch (pathChoice) {
    case 1: return [0, 1, 11, 21, 22, 23, 24, 25, 35, 45, 55, 65, 75, 76, 77, 87, 88];
  }
}

function isValidMove(index, path) {
  for (let i = 0; i < path.length; i++) {
    if (path[i] === index) {
      return true;
    }
  }

  return false;
}

function delay(time) {
  for (let i = 0; i < 100000000 * time; i++) {
  }
}

function continueGame() {
  let currentIndex = 0;
  console.log(getMineField(currentIndex));
  const path = getPath();

  while (currentIndex < 88) {
    const index = getValidIndex(currentIndex);
    console.clear();

    if (isValidMove(index, path)) {
      currentIndex = index;
      console.log(getMineField(currentIndex));

    } else {

      currentIndex = 0;
      console.log(getBombedField(index));
      delay(8);
      console.clear();
      console.log(getMineField(currentIndex));
    }
  }

  console.log("Congratulations you've nailed it! ✨🏆🏆");
}

function wantToPlay() {
  const choice = confirm('\n😎 Want to play again???');
  if (!choice) {
    console.clear();
    console.log('\n👋🙋🏻‍♂️GOOD BYE!🙋🏻‍♂️👋\n');

    return choice;
  }

  return choice;
}

function startOfGame() {
  prompt('\n😎 Hit return to continue!');
  console.clear();
  continueGame();
  if (wantToPlay()) {
    startOfGame();
  }
  return 0;
}

function gameStarter() {
  console.clear();
  console.log(greet());
  startOfGame();
}
gameStarter();







