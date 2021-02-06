const solution = (x, y, z) => {
  const init = y - x;
  return init <= z ? 1 : Math.ceil(init / z);
};

solution(10, 85, 30);
