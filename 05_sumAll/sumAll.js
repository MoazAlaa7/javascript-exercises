const sumAll = function (start, end) {
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    start < 0 ||
    end < 0 ||
    Math.floor(start) !== start ||
    Math.floor(end) !== end
  ) {
    return "ERROR";
  }

  const min = Math.min(start, end);
  const max = Math.max(start, end);

  // Solution 1: Using formula of difference between sums
  //   return (max * (max + 1)) / 2 - ((min - 1) * min) / 2;

  // Solution 2: Using loop
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
