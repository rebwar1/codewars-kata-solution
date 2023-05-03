const phrases = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
];

function howMuchILoveYou(n) {
  return phrases[(n - 1) % phrases.length];
}

function howMuchILoveYou(nbPetals) {
  let petals = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ];
  return petals[(nbPetals - 1) % 6];
}
