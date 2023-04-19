const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : 2 * (l + w);
};

const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

const areaOrPerimeter = function (l, w) {
  let area = l * w;
  let perimeter = (l + w) * 2;

  return l === w ? area : perimeter;
};
