const solution = (s, p, q) => {
  const obj = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  };
  const str = s.toUpperCase().split("");
  const arr = p.map((a, i) => {
    return Math.min(obj[str[a]], obj[str[q[i]]]);
  });
  console.log(arr);
  return arr;
};

solution("CAGCCTA", [2, 5, 0], [4, 5, 6]);