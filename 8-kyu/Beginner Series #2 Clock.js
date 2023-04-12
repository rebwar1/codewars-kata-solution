function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

function past(h, m, s) {
  var hours = h * 60 * 60 * 1000;
  var minutes = m * 60 * 1000;
  var seconds = s * 1000;

  return hours + minutes + seconds;
}
