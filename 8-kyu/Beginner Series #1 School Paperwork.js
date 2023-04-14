function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

function paperwork(n, m) {
  if (m < 0 || n < 0) {
    return 0;
  }
  return m * n;
}
