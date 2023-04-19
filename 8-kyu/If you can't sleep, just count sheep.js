var countSheep = function (num) {
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

countSheep = n => [...Array(n).keys()].map(x => `${x + 1} sheep...`).join``;
