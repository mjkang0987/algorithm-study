const solution = (x, a) => {
  let length = a.length;
  let set = new Set();
  for (let i = 0; i < length; i++) {
    set.add(a[i]);
    if (set.size === x) return i;
  }

  return -1;
};

solution(5, [1, 3]);
solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);
solution(5, [1, 3, 5, 1, 4, 2, 3, 5, 5]);
