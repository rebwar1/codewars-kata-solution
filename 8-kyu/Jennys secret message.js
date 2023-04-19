function greet(name) {
  return 'Hello, ' + (name == 'Johnny' ? 'my love' : name) + '!';
}

function greet(name) {
  if (name === 'Johnny') return 'Hello, my love!';
  return 'Hello, ' + name + '!';
}
