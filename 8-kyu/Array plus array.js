function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}
