function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

function enough(cap, on, wait) {
  if (on + wait < cap) {
    return 0;
  } else {
    return on + wait - cap;
  }
}
