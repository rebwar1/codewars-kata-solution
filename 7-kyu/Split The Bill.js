function splitTheBill(x) {
  var average = 0;
  var count = 0;

  for (item in x) {
    average += x[item];
    count++;
  }
  average = average / count;

  for (item in x) {
    x[item] = Math.round((x[item] - average) * 100) / 100;
  }

  return x;
}
