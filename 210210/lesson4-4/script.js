const solution = (a) => {
  const arr = new Set(a);
  const b = [];
  const size = arr.size;
  for (let i = 0; i < size; i++) {
    b[i] = i + 1;
  }

  if (size !== a.length) return 0;

  for (let i = 0; i < size; i++) {
    if (!arr.has(i + 1)) return 0;
  }

  return 1;
};

solution([1, 1, 1, 1]);
solution([1, 3, 5, 2, 4]);
solution([1, 3, 4]);