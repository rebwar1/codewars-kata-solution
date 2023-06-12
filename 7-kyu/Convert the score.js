function scoreboard(string) {
  var arr = string.split(" ");
  var a = [
    "nil",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return [a.indexOf(arr[arr.length - 2]), a.indexOf(arr[arr.length - 1])];
}
