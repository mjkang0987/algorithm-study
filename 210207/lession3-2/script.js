const solution = (A) => {
  const expectedSum = ((A.length + 1) * (A.length + 2)) / 2;
  const realSum = A.reduce((a, b) => a + b, 0);
  console.log(expectedSum - realSum);
  return expectedSum - realSum;
};

solution([2, 4, 5]);
