function between(a, b) {
  // your code here
  arr = [];
  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

const between = (a, b) => Array.from(new Array(b - a + 1), (_, i) => a + i);
