function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

function simpleMultiplication(n) {
  return n % 2 == 0 ? n * 8 : n * 9;
}

function simpleMultiplication(value) {
  if (value % 2 === 0) {
    return value * 8;
  } else {
    return value * 9;
  }
}
