function uniqueSum(lst) {
  return [...new Set(lst)].reduce((a, b) => a + b, null);
}
