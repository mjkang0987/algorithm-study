const solution = (arr) => {
  if (arr.length === 1) return arr[0];
  let result = [];
  const total = arr.reduce((prev, curr) => prev + curr);

  arr.reduce((prev, curr) => {
    const rest = total - prev;
    result.push(Math.abs(rest - prev));
    return prev + curr;
  });

  result.sort((a, b) => a - b);

  return result[0];
};

solution([3, 1, 2, 4, 3]);
solution([3, 1, 2, 4, 3]);
solution([-1000, 1000]);
solution([-10, -20, -30, -40, 100]);
