// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.
function getLuckyNumber(start, end) {
  return start + Math.ceil(Math.random() * (end - start));
}

function underlineBottom(text) {
  let dash = '+';
  for (let index = 0; index < text.length - 8; index++) {
    dash += '-';
  }
  dash += '+';

  return text + '\n' + dash;
}

function greet() {
  const greetMsg1 = '🤔 WELCOME IN GUESSING';
  const greetMsg2 = '🤔🔮?🧑🏼‍🎓🧠';
  const greetMsg3 = 'THE NUMBER GAME 🤔';

  return underlineBottom(greetMsg1 + greetMsg2 + greetMsg3);
}

function showRules() {
  const heading = '👉 Here are the rules of the game.\n\n';
  const rule1 = '🔷 First you need to enter a range of numbers.\n';
  const rule2 = '🔶 From the given range, your job is to guess one number.\n';
  const rule3 = '🔷 For that you can select your number of attempt.\n';
  const rule4 = '🔶 If you will guess the number before your attempts end,\n';
  const rule5 = '🔷 Then you will win otherwise try next time';

  return heading + rule1 + rule2 + rule3 + rule4 + rule5;
}

function isRangeValid(start, end) {
  return start > 0 && end > 0 && start < end;
}

function isAttemptValid(number) {
  return number >= 0 && number <= 50;
}

function isGuessingValid(start, end, guessedNumber) {
  return guessedNumber >= start && guessedNumber <= end;
}

function readGuessing(chance) {
  return +prompt('🤔 Guess a number (Chances left 🤞' + chance+ '):');
}

function readBetween(start, end, chance) {
  const guessedNumber = readGuessing(chance);
  if (isGuessingValid(start, end, guessedNumber)) {
    return guessedNumber;
  }
  console.log('🙃 ' + guessedNumber + ' Is invalid input! ❌');
  console.log('🙂 Please enter valid number between ' + start + ' and ' + end);

  return readBetween(start, end, chance);
}

function guessingIncorrectMsg(guessedNumber, luckyNumber) {
  if (guessedNumber < luckyNumber) {
    return '😕 ' + guessedNumber + ' Too low! Try a higher ⬆ number.\n';
  }

  return '😕 ' + guessedNumber + ' Too high! Try a smaller ⬇ number.\n';
}

function congratsMsg(guessedNumber) {
  const congratsMsg1 = "\n✅😱🥳🤩🫡Bravo! 🫵You've nailed it 🔥💥✨💫";
  const congratsMsg2 = "The number was " + guessedNumber + '!\n';

  return congratsMsg1 + congratsMsg2;
}

function attemptsOverMsg(luckyNumber) {
  const msg1 = "\n😩 Oh no! You've used all your attempts, ";
  const msg2 = 'Better luck next time, ';
  const msg3 = "The lucky number was " + luckyNumber + '!\n';

  return msg1 + msg2 + msg3;
}

function guessingStatus(start, end, attempts) {
  console.log('\n🤔🔮?🧑🏼‍🎓🧠 Your guessing starts now...\n');
  const luckyNumber = getLuckyNumber(start, end);
  for (let chance = attempts; chance > 0; chance--) {
    const guessedNumber = readBetween(start, end, chance);
    if (guessedNumber === luckyNumber) {
      return congratsMsg(guessedNumber);
    }
    console.log(guessingIncorrectMsg(guessedNumber, luckyNumber));
  }

  return attemptsOverMsg(luckyNumber);
}

function attemptInvalidMsg() {
  return '\n🙃 Invalid value! \n🙂 Please enter valid value. \n';
}

function readAttempts() {
  const attempts = +prompt('\n👉 Enter number of attempts:');
  if (isAttemptValid(attempts)) {
    return attempts;
  }
  console.log(attemptInvalidMsg());

  return readAttempts();
}

function readStart() {
  return +prompt('👉 Enter start of range:');
}

function readEnd() {
  return +prompt('👉 Enter end of range:');
}

function invalidRangeMsg() {
  return '\n🙃 Invalid range! ❌ \n🙂 Please enter valid range. \n';
}

function continueGame() {
  const start = readStart();
  const end = readEnd();
  if (isRangeValid(start, end)) {
    console.log('👍 Your range is from ' + start + ' to ' + end);
    const attempts = readAttempts();
    console.clear();

    return guessingStatus(start, end, attempts);
  }
  console.log(invalidRangeMsg());

  return continueGame();
}

function wantToPlay() {
  const choice = confirm('\n😎 Want to play again???');
  if (!choice) {
    console.clear();
    console.log('👋🙋🏻‍♂️GOOD BYE!🙋🏻‍♂️👋\n');

    return choice;
  }

  return choice;
}

function startGame() {
  console.clear();
  console.log(greet());
  console.log(showRules());
  prompt('\n😎 Hit return to continue:');
  console.clear();
  console.log('🤩 NICE, HAVE A GOOD LUCK!' + '\n');
  console.log(continueGame());
  if (wantToPlay()) {
    startGame();
  }
  return 0;
}


startGame();
