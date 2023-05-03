function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

function createArray(number) {
  return Array.from({ length: number }, (v, i) => i + 1);
}
