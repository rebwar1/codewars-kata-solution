const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft;
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  mpg * fuelLeft >= distanceToPump;
