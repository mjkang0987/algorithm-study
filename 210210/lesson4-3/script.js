const solution = (a) => {
  const arr = new Set(a);
  const max = Math.max(...arr);
  const size = arr.size;
  let result;

  for (let i = 1; i <= size; i++) {
    // console.log(i);
    if (!arr.has(i)) {
      result = i;
    } else {
      result = size + 1;
    }
  }

  if (max < 0) result = 1;

  console.log(`result: ${result}`);
  return result;
};

solution([1, 3, 6, 4, 1, 2]);
solution([1, 2, 3]);
solution([-1, -3]);
