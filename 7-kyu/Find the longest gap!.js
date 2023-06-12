function gap(num) {
  binary = num.toString(2);
  zeros = binary.match(/0+(?=1)/g) || [""];
  longest = zeros.sort().pop();
  return longest.length;
}

const gap = num =>
  (num.toString(2).match(/10+(?=1)/g) || [" "]).sort().pop().length - 1;
