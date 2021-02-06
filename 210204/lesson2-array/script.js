const move = (arr) => {
  const length = arr.length;
  const last = arr[length - 1];
  arr.pop();
  arr.unshift(last);
  return arr;
};

const solution = (a, k) => {
  let arr = a;
  for (let i = 0; i < k; i++) {
    arr = move(arr);
  }
  return arr;
};

solution([1, 2, 3], 1);
