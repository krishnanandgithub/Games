function repeat(string, times) {
  let repeatedString = '';
  for (let i = 1; i < times; i++) {
    repeatedString += string;
  }

  return repeatedString;
}

function createLine(y, z) {
  let clr1 = '🔴';
  let clr2 = '🟡';
  if (Math.min(y, z) === z) {
    clr1 = '🟡';
    clr2 = '🔴';
  }

  return repeat(' ', Math.min(y, z)) + clr1 + repeat('━', Math.abs(y - z)) + clr2;
}

function delay(time) {
  for (let i = 0; i < 10000000 * time; i++) {
  }
}

function createDNA() {
  for (let n = 0; n < 100; n++) {
    console.clear();
    dnaWave1(n);
    delay(20);
  }
}

function sin(x, amplitude, wavelength, phase) {
  return Math.round(amplitude * Math.sin(x * wavelength) + phase);
}

function dnaWave1(n) {
  for (let i = -10 + n; i < 10 + n; i++) {
    const y = sin(i, 17, 0.2, 20);
    const z = sin(-(i + 2), 17, 0.2, 20);

    console.log(createLine(y, z));
  }
}

createDNA();



