const solution = (a, b, k) => {
  return Math.floor(b / k) - Math.ceil(a / k) + 1;
};

solution(100, 123, 2);
solution(0, 1, 11);
