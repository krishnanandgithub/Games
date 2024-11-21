// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.
function getLuckyNumberBetween(start, end) {
  return start + Math.ceil(Math.random() * (end - start));
}

function underlineB(text) {
  let dash = '+';
  for (let index = 0; index < text.length - 2; index++) {
    dash += '-';
  }
  dash += '+';

  return text + '\n' + dash;
}

function greet() {
  const greetMsg = '\n' + '!!----WELCOME IN GUESSING THE NUMBER GAME----!!';

  console.log(underlineB(greetMsg));
}

function rules() {
  const heading = '\n👉 Here are the rules of the game\n\n';
  const rule1 = '🔹 First you need to enter a range of numbers\n';
  const rule2 = '🔸 From the given range, your job is to guess one number\n';
  const rule3 = '🔹 For that you will have choice to select your number of attempt\n';
  const rule4 = '🔸 If you guessed the number before your attempt end, You will won otherwise try next time\n\n';

  console.log(heading + rule1 + rule2 + rule3 + rule4);
}

function isValidRange(start, end) {
  return start > 0 && end > 0 && start < end;
}

function isValidAttempt(number) {
  return number >= 0 && number < 50;
}

function isGuessedNumberValid(start, end, guessedNumber) {
  return guessedNumber >= start && guessedNumber <= end;
}

function takeAndValidateGuessingValue(start, end) {
  const guessedNumber = +prompt('\n🤔 Guess a number within range:');
  if (isGuessedNumberValid(start, end, guessedNumber)) {
    return guessedNumber;
  }
  console.log('\n🙃 ' + guessedNumber + ' Is invalid input!');
  console.log('🙂 Please enter valid number between ' + start + ' and ' + end);
  console.log();
  return takeAndValidateGuessingValue(start, end);
}

function isGuessedNumberHighOrLow(guessedNumber, luckyNumber) {
  if (guessedNumber < luckyNumber) {
    console.log('\n😕 ' + guessedNumber + ' Too low! Try a higher number.\n');
  }
  if (guessedNumber > luckyNumber) {
    console.log('\n😕 ' + guessedNumber + ' Too high! Try a smaller number.\n');
  }
}

function guessing(start, end, attempts, luckyNumber) {
  for (let chance = attempts; chance > 0; chance--) {
    console.log('You have ' + chance + ' chance 🤷🏻‍♂️');
    const guessedNumber = takeAndValidateGuessingValue(start, end);
    if (guessedNumber === luckyNumber) {
      return "\n😱🥳🤩🫡 Bravo! 🫵You've nailed it. The number was " + guessedNumber + '!\n';
    }
    isGuessedNumberHighOrLow(guessedNumber, luckyNumber);
  }

  return "\n😩 Oh no! You've used all your attempts, Better luck next time\n";
}

function takeValidateAndGetAttempt() {
  const attempts = +prompt('\n👉 Enter number of attempts do you need:');
  if (isValidAttempt(attempts)) {
    return attempts;
  }
  console.log('\n🙃 Invalid value! \n🙂 Please enter valid value. \n');
  return takeValidateAndGetAttempt();
}

function takeInputsValidateAndComplete() {
  const start = +prompt('👉 Enter start of range:');
  const end = +prompt('👉 Enter end of range:');
  if (isValidRange(start, end)) {
    console.log('\n👍 Your range is from ' + start + ' to ' + end);
    const luckyNumber = getLuckyNumberBetween(start, end);
    const attempts = takeValidateAndGetAttempt(start);
    console.log('\n👉 Your guessing starts now...\n');
    return guessing(start, end, attempts, luckyNumber);
  }

  console.log('\n🙃 Invalid range! \n🙂 Please enter valid range. \n');
  return takeInputsValidateAndComplete();
}

function wantToRestart() {
  const choice = confirm('\n😎 Want to play again???');
  if (!choice) {
    console.log('\n👋GOOD BYE!👋\n');
    return choice;
  }

  return choice;
}

function startGame() {
  greet();
  rules();
  const choice = confirm('🫵 Would you like to proceed??');
  if (!choice) {
    console.log('\n👋GOOD BYE!👋\n');
    return 0;
  }
  console.clear();
  console.log('🩷 NICE, HAVE A GOOD LUCK!' + '\n');
  console.log(takeInputsValidateAndComplete());
  if (wantToRestart()) {
    startGame();
  }
  return 0
}

startGame();
