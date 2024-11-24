function getCharToAdd(y, z, index) {
  let char = ' ';
  if (index > Math.min(y, z)) {
    char = '━';
  }
  if (index === y) {
    char = '🟡';
  }
  if (index === z) {
    char = '🔴';
  }

  return char;
}

function createLine(y, z) {
  let string = '';
  for (let index = 0; index <= Math.max(y, z); index++) {
    string += getCharToAdd(y, z, index);
  }

  return string;
}

function delay(time) {
  for (let i = 0; i < 10000000 * time; i++) {
  }
}

function createDNA() {
  for (let a = 0; a < 30; a++) {
    console.clear();
    dnaWave1(a);
    delay(1);
    console.clear();
    dnaWave2(a);
    delay(50);
  }
}

function dnaWave1(n) {
  for (let i = -17 + 4 * n; i < 17 + 4 * n; i++) {
    const x1 = i / 5;
    const x2 = (i + 2) / 5;
    const y = Math.round(17 * Math.sin(x1) + 20);
    const z = Math.round(17 * Math.sin(-x2) + 20);

    console.log(createLine(y, z));
  }
}

function dnaWave2(n) {
  const b = 2 * (2 * n + 1);
  for (let i = -17 + b; i < 17 + b; i++) {
    const x1 = i / 5;
    const x2 = (i + 2) / 5;
    const y = Math.round(17 * Math.sin(-x1) + 20);
    const z = Math.round(17 * Math.sin(x2) + 20);

    console.log(createLine(z, y));
  }
}

createDNA();



