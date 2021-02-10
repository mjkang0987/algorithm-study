const solution = (x, a) => {
  const arr = new Array(x).fill(0);
  let max = 0;
  a.map((r) => {
    const num = r - 1;
    if (r < x) {
      arr[num] += 1;
    } else {
      max = Math.max.apply(null, arr);
      arr.fill(max);
    }
  });
  return arr;
};
solution(5, [3, 4, 4, 6, 1, 4, 4]);

solution(5, [6, 6, 6, 6, 6, 6, 6, 6]);
solution(5, [3, 7, 4, 6, 1, 4, 4]);
solution(1, [0]);
solution(1, [1, 3, 2, 3, 4, 5]);
