function manyChecksSwitch() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);

  let str;

  switch (a) {
    case 1: case 2: case 3: case 4:
      str = 'a is less than or equal to 10, ';
      str += 'and a is less than or equal to 5, ';
      str += (a % 2 ? ' and a is odd,' : ' and a is even, ');
      break;
    case 5:
      str = 'a is less than or equal to 10 an example of a special case,';
      str += 'and a is less than or equal to 5, ';
      str += ' and a is odd,';   // 5 нечёт
      break;
    case 6: case 7: case 8: case 9: case 10:
      str = 'a is less than or equal to 10, ';
      str += 'and a is greater than 5,';
      str += (a % 2 ? ' and a is odd,' : ' and a is even, ');
      break;
    case 11: case 12: case 13: case 14: case 16: case 17: case 18: case 19: case 20:
      str = 'a is bigger than 10,';
      str += 'and a is greater than 5,';
      str += (a % 2 ? ' and a is odd,' : ' and a is even, ');
      break;
    case 15:
      str = 'a is bigger than 10';
      str += 'but a is not 15';
      str += 'and a is greater than 5';
      str += ' and a is odd';   // 15 нечёт
      break;
  }

  return str;
}

console.log(manyChecksSwitch());