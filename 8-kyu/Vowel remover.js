function shortcut(string) {
  return string.replace(/[aeiou]/g, '');
}

function shortcut(str) {
  return str
    .split('')
    .filter(function (e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1;
    })
    .join('');
}
