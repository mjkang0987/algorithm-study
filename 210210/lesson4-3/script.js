const solution = (a) => {
  const arr = new Set(a);
  if (!arr.has(1)) return 1;
  const size = arr.size;
  let result;
  const b = new Set();
  for (let i = 0; i <= size; i++) {
    b.add(i + 1);
  }

  result = [...b].filter((a) => !arr.has(a));

  // console.log(`result: ${result}`);
  return result[0];
};

solution([1, 3, 6, 4, 1, 2]);
solution([1, 2, 3]);
solution([-1, -3]);
