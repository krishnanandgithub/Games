function getCharToAdd(y, z, index) {
  let char = ' ';
  if (index > Math.min(y, z)) {
    char = '=';
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

function createDNA() {
  for (let i = -10; i < 70; i++) {
    const x = i / 5;
    const y = Math.round(17 * Math.sin(x) + 20);
    const z = Math.round(17 * Math.sin(-x) + 20);
    
    console.log(createLine(y, z));
  }
}

createDNA();


