const removeFromArray = function (arr, ...nums) {
  return arr.filter((num) => !nums.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
