function hoopCount(n) {
  return n < 10
    ? 'Keep at it until you get it'
    : 'Great, now move on to tricks';
}

function hoopCount(n) {
  const HOPS_LIMIT = 10;
  return n >= HOPS_LIMIT
    ? 'Great, now move on to tricks'
    : 'Keep at it until you get it';
}
