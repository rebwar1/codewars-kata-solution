function fakeBin(x) {
  return x
    .split('')
    .map(n => (n < 5 ? 0 : 1))
    .join('');
}

function fakeBin(x) {
  return x.replace(/\d/g, d => (d < 5 ? 0 : 1));
}
