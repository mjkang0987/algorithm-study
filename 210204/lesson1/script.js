const solution = (a) => {
  const str = a.toString(2).replace(/1/gi, "_");

  if (str.indexOf("0") < 0) return 0;
  if (str.indexOf("_") === str.lastIndexOf("_")) return 0;

  const arr = str.toString().split("_");
  if (str[str.length - 1] === "0") arr.pop();
  const length = arr.length;
  let max = 0;
  for (let i = 0; i < length; i++) {
    if (max < arr[i].length) {
      max = arr[i].length;
    }
  }

  return max;
};