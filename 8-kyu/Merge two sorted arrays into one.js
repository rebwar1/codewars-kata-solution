function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}

function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a, b) => a - b);
}
