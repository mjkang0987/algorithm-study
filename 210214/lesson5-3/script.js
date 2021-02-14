const solution = (a) => {
  let min = (a[0] + a[1]) / 2;
  let index = 0;
  let avg = 0;
  for (let i = 2; i < a.length; i++) {
    avg = (a[i - 2] + a[i - 1] + a[i]) / 3;
    if (avg < min) {
      min = avg;
      index = i - 2;
    }

    avg = (a[i - 1] + a[i]) / 2;
    if (avg < min) {
      min = avg;
      index = i - 1;
    }
  }
  return index;
};
solution([4, 2, 2, 5, 1, 5, 8]);
solution([4, 2]);
solution([1, 1, 1]);
solution([2, 3, 4, 5]);
