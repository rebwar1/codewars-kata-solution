function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var num = 0;

  for (var i = 0; i < arrayOfSheep.length; i++)
    if (arrayOfSheep[i] == true) num++;

  return num;
}

function countSheeps(arr) {
  return arr.filter(Boolean).length;
}
