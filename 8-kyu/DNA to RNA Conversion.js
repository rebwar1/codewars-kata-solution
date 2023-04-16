function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

function DNAtoRNA(dna) {
  var hold = '';
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] == 'T') {
      hold += 'U';
    } else {
      hold += dna[i];
    }
  }
  return hold;
}
