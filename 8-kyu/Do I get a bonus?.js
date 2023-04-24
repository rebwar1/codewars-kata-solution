function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}

const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;
