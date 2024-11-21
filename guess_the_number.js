// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.
function getLuckyNumberBetween(start, end) {
  return start + Math.ceil(Math.random() * (end - start));
}

function underlineB(text) {
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

  console.log(underlineB(greetMsg1 + greetMsg2 + greetMsg3));
}

function showRules() {
  const heading = '👉 Here are the rules of the game\n\n';
  const rule1 = '🔷 First you need to enter a range of numbers\n';
  const rule2 = '🔶 From the given range, your job is to guess one number\n';
  const rule3 = '🔷 For that you can select your number of attempt\n';
  const rule4 = '🔶 If you will guess the number before your attempts end\n';
  const rule5 = '🔷 Then you will win otherwise try next time';

  console.log(heading + rule1 + rule2 + rule3 + rule4 + rule5);
}

function isRangeValid(start, end) {
  return start > 0 && end > 0 && start < end;
}

function isAttemptValid(number) {
  return number >= 0 && number <= 50;
}

function isGuessedNumberValid(start, end, guessedNumber) {
  return guessedNumber >= start && guessedNumber <= end;
}

function takeGuessedNumberAsInputAndValidate(start, end) {
  const guessedNumber = +prompt('🤔 Guess a number within range:');
  if (isGuessedNumberValid(start, end, guessedNumber)) {
    return guessedNumber;
  }
  console.log('🙃 ' + guessedNumber + ' Is invalid input! ❌');
  console.log('🙂 Please enter valid number between ' + start + ' and ' + end);

  return takeGuessedNumberAsInputAndValidate(start, end);
}

function acknowledgeGuessedNumberIsHighOrLow(guessedNumber, luckyNumber) {
  if (guessedNumber < luckyNumber) {
    console.log('😕 ' + guessedNumber + ' Too low! Try a higher ⬆ number.\n');
  }
  if (guessedNumber > luckyNumber) {
    const msg1 = '😕 ' + guessedNumber;
    const msg2 = ' Too high! Try a smaller ⬇ number.\n';
    console.log(msg1 + msg2);
  }
}

function congratsMsg(guessedNumber) {
  const congratsMsg1 = "\n✅😱🥳🤩🫡 Bravo! 🫵You've nailed it. ";
  const congratsMsg2 = "The number was " + guessedNumber + '!\n';

  return congratsMsg1 + congratsMsg2;
}

function attemptsOverMsg(luckyNumber) {
  const msg1 = "\n😩 Oh no! You've used all your attempts, ";
  const msg2 = 'Better luck next time, ';
  const msg3 = "The lucky number was " + luckyNumber + '!\n';

  return msg1 + msg2 + msg3;
}

function resultOfGuessingOfLuckyNumber(start, end, attempts, luckyNumber) {
  for (let chance = attempts; chance > 0; chance--) {
    console.log('\n🔴 You have ' + chance + ' more chance 🤷🏻‍♂️');
    const guessedNumber = takeGuessedNumberAsInputAndValidate(start, end);
    if (guessedNumber === luckyNumber) {

      return congratsMsg(guessedNumber);
    }
    acknowledgeGuessedNumberIsHighOrLow(guessedNumber, luckyNumber);
  }

  return attemptsOverMsg(luckyNumber);
}

function takeNumberOfAttemptsAsInputAndValidate() {
  const attempts = +prompt('\n👉 Enter number of attempts do you need:');
  if (isAttemptValid(attempts)) {
    return attempts;
  }
  console.log('\n🙃 Invalid value! \n🙂 Please enter valid value. \n');

  return takeNumberOfAttemptsAsInputAndValidate();
}

function takeInputsValidateAndComplete() {
  const start = +prompt('👉 Enter start of range:');
  const end = +prompt('👉 Enter end of range:');
  if (isRangeValid(start, end)) {
    console.log('👍 Your range is from ' + start + ' to ' + end);
    const luckyNumber = getLuckyNumberBetween(start, end);
    const attempts = takeNumberOfAttemptsAsInputAndValidate(start);
    console.clear();
    console.log('\n🤔🔮?🧑🏼‍🎓🧠 Your guessing starts now...');

    return resultOfGuessingOfLuckyNumber(start, end, attempts, luckyNumber);
  }
  console.log('\n🙃 Invalid range! ❌ \n🙂 Please enter valid range. \n');

  return takeInputsValidateAndComplete();
}

function wantToPlay() {
  const choice = confirm('\n😎 Want to play???');
  if (!choice) {
    console.clear();
    console.log('👋GOOD BYE!👋\n');

    return choice;
  }
  
  return choice;
}

function startGame() {
  prompt('\n😎 Hit return to continue:');
  console.clear();
  console.log('🩷 NICE, HAVE A GOOD LUCK!' + '\n');
  console.log(takeInputsValidateAndComplete());
  if (wantToPlay()) { 
    startGame();
  }
  return 0;
}

console.clear();
greet();
showRules();
startGame();
