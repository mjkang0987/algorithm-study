const solution = (s, p, q) => {
  let arr = [];

  for (let i = 0; i < p.length; i++) {
    let str = s.slice(p[i], q[i] + 1);
    if (str.indexOf("A") > -1) arr.push(1);
    else if (str.indexOf("C") > -1) arr.push(2);
    else if (str.indexOf("G") > -1) arr.push(3);
    else arr.push(4);
  }

  return arr;
};

solution("CAGCCTA", [2, 5, 0], [4, 5, 6]);
solution("TC", [0, 0, 1], [0, 1, 1]);