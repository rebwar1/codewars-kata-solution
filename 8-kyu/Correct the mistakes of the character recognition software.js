correct = s => s.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');

function correct(string) {
  return string.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I');
}
