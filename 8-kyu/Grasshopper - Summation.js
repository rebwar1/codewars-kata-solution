var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

const summation = n => (n * (n + 1)) / 2;

const summation = num =>
  Array(num)
    .fill(true)
    .reduce((sum, item, index) => sum + index + 1, 0);
