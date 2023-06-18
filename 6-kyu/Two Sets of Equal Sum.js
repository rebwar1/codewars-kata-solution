function createTwoSetsOfEqualSum(n) {
  let equalSum = (n * (n + 1)) / 2;
  if (equalSum % 2 != 0) return [];
  let acc = equalSum / 2;

  let answer = [[], []];

  for (let i = n; i >= 1; i--) {
    if (acc - i >= 0) {
      acc -= i;
      answer[0].push(i);
    } else {
      answer[1].push(i);
    }
  }

  return answer;
}
/////////////
function createTwoSetsOfEqualSum(n) {
  const totalSum = (n * (n + 1)) / 2;

  if (totalSum % 2 !== 0) {
    // If the total sum is odd, return an empty array or None.
    return [];
  }

  const set1 = [];
  const set2 = [];
  let sum1 = 0;
  let sum2 = 0;

  for (let i = n; i >= 1; i--) {
    if (sum1 + i <= totalSum / 2) {
      set1.push(i);
      sum1 += i;
    } else {
      set2.push(i);
      sum2 += i;
    }
  }

  return [set1, set2];
}
