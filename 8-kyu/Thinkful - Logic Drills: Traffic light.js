function updateLight(current) {
  return current === 'yellow'
    ? 'red'
    : current === 'green'
    ? 'yellow'
    : 'green';
}

const updateLight = current =>
  ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current]);
