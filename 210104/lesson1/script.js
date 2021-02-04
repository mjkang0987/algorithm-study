const solution = (decimal) => {
  if (decimal > 1000000) return;
  const binary = decimal.toString(2).replace(/1/gi, "/");

  if (binary.indexOf("/") === binary.lastIndexOf("/")) return 0;

  const binaryArray = binary.split("/");
  const binaryIter = binaryArray.map((a) => a.length);

  return Number(Math.max(...binaryIter));
};

solution(1232323);
