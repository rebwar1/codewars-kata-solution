function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

function digitize(n) {
  return (n + '').split('').map(Number).reverse();
}
