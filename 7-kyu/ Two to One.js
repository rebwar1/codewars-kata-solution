function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}

function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function (element, index, array) {
    return element !== array[index - 1];
  });
  return s4.join("");
}
