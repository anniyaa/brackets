module.exports = function check(str, bracketsConfig) {
  const PAIRS = {};
  const OPEN_BR = [];


  for (el of [...bracketsConfig]) {
    PAIRS[el[1]] = el[0]
    OPEN_BR.push(el[0])
  }

  let brackets = [];

  for (i=0; i<str.length; i++) {
    let curSymbol = str[i];

    if (PAIRS[curSymbol] === curSymbol ) {
      if (brackets.includes(curSymbol)) {
        brackets.pop()
      } else {
        brackets.push(curSymbol)
      }
    } else if (OPEN_BR.includes(curSymbol)) {
      brackets.push(curSymbol);
    } else if (PAIRS[curSymbol] === brackets[brackets.length-1]) {
      brackets.pop()
    } else {
      return false;
    }

  }

  if (brackets.length === 0) {
    return true;
  } else {
    return false;
  }
}
