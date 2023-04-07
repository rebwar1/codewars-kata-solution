const century = year => Math.ceil(year / 100);

function century(year) {
  return ((year + 99) / 100) | 0;
}
