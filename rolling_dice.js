function getDiceRoll() {
  return Math.ceil(Math.random() * 6);
}

function diceFor1() {
  const row1 = '┏━━━━━━━━┓\n';
  const row2 = '┃        ┃\n';
  const row3 = '┃   ⚪   ┃\n';
  const row4 = '┃        ┃\n';
  const row5 = '┗━━━━━━━━┛\n';

  return row1 + row2 + row3 + row4 + row5;
}

function diceFor2() {
  const row1 = '┏━━━━━━━━┓\n';
  const row2 = '┃ ⚪     ┃\n';
  const row3 = '┃        ┃\n';
  const row4 = '┃     ⚪ ┃\n';
  const row5 = '┗━━━━━━━━┛\n';

  return row1 + row2 + row3 + row4 + row5;
}

function diceFor3() {
  const row1 = '┏━━━━━━━━┓\n';
  const row2 = '┃ ⚪     ┃\n';
  const row3 = '┃   ⚪   ┃\n';
  const row4 = '┃     ⚪ ┃\n';
  const row5 = '┗━━━━━━━━┛\n';

  return row1 + row2 + row3 + row4 + row5;
}

function diceFor4() {
  const row1 = '┏━━━━━━━━┓\n';
  const row2 = '┃ ⚪  ⚪ ┃\n';
  const row3 = '┃        ┃\n';
  const row4 = '┃ ⚪  ⚪ ┃\n';
  const row5 = '┗━━━━━━━━┛\n';

  return row1 + row2 + row3 + row4 + row5;
}

function diceFor5() {
  const row1 = '┏━━━━━━━━┓\n';
  const row2 = '┃ ⚪  ⚪ ┃\n';
  const row3 = '┃   ⚪   ┃\n';
  const row4 = '┃ ⚪  ⚪ ┃\n';
  const row5 = '┗━━━━━━━━┛\n';

  return row1 + row2 + row3 + row4 + row5;
}

function diceFor6() {
  const row1 = '┏━━━━━━━━┓\n';
  const row2 = '┃ ⚪  ⚪ ┃\n';
  const row3 = '┃ ⚪  ⚪ ┃\n';
  const row4 = '┃ ⚪  ⚪ ┃\n';
  const row5 = '┗━━━━━━━━┛\n';

  return row1 + row2 + row3 + row4 + row5;
}

function delayOutput(num) {
  for (let i = 0; i < 100000000 * num; i++) {
  }
}

function rollingDice() {
  for (let numberOfTimes = 0; numberOfTimes < 10; numberOfTimes++) {
    delayOutput(2);
    console.clear();
    console.log(diceRolledOutput());
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
  const choice = confirm('👉 Hit return to roll dice!!\n👉 Or want to exit!!');
  console.log();
  if (choice) {
    return 0;
  }

  rollingDice();
  rollDice();
}

rollDice();
