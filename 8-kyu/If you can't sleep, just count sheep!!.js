var countSheep = function (num) {
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

const countSheep = num => {
  let val = '';
  for (let i = 1; i <= num; i++) {
    val += `${i} sheep...`;
  }
  return val;
};
