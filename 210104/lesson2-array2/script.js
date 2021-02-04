const solution = (arr) => {
  const arrFilter = arr.map((a) => arr.filter((b) => a === b));
  const result = arrFilter.filter((f) => f.length % 2 !== 0);
  return result[0][0];
};

solution([1, 2, 3, 1, 2, 3, 4]);
