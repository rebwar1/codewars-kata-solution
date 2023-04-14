function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum = function (numbers) {
  'use strict';
  return numbers.reduce(function (t, n) {
    return t + n;
  }, 0);
};
