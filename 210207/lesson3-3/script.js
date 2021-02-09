const solution = (arr) => {
  let result = [];
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    const start = arr.slice(0, i).reduce((a, b) => a + b);
    const end = arr.slice(i, arr.length).reduce((a, b) => a + b);
    const rest = start - end < 0 ? -(start - end) : start - end;
    result = [...result, rest];
  }
  return Math.min.apply(null, result);
};

solution([3, 1, 2, 4, 3]);
solution([3, 1, 2, 4, 3]);