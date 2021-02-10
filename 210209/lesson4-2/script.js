const solution = (x, a) => {
  const arr = [];
  let max = 0;
  let limitMax = 0;

  for (let i = 0; i < x; i ++) {
    arr[i] = 0
  };

  a.map((r) => {
    const num = r - 1;
    if (r <= x) {
      arr[num] = Math.max.apply(null, [limitMax, arr[num]]);
      arr[num] += 1;
      max = Math.max.apply(null, [max, arr[num]]);
    } else {
      limitMax = max;
    }
  });

  arr.map((a, i) => {
    arr[i] = Math.max.apply(null, [a, limitMax])
  });

  return arr;
};

solution(5, [3, 4, 4, 6, 1, 4, 4]);

solution(5, [6, 6, 6, 6, 6, 6, 6, 6]);
solution(5, [3, 7, 4, 6, 1, 4, 4]);
solution(1, [0]);
solution(1, [1, 3, 2, 3, 4, 5]);
