function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

const solution = (a, b) => (a.length > b.length ? b + a + b : a + b + a);
