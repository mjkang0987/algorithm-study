const solution = (arr) => {
  let arrSet = new Set();
  let result = "";
  arr.map((a) => {
    if (!arrSet.has(a)) arrSet.add(a);
    else arrSet.delete(a);
    return arrSet;
  });

  result = [...arrSet];
  return result[0];
};

solution([9, 3, 9, 3, 9, 7, 9]);