const solution = (x, y, z) => {
  if (x >= y) {
    return 0;
  }
  const init = y - x;
  const result = init <= z ? 1 : Math.ceil(init / z);
  return result;
};

solution(10, 85, 30);
solution(20, 10, 0);
