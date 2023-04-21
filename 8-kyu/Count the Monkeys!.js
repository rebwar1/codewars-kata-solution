function monkeyCount(n) {
  var monkeys = [];
  for (var i = 1; i < n + 1; i++) {
    monkeys.push(i);
  }
  return monkeys;
}

function monkeyCount(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}
