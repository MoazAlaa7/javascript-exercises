function roundToOneDecimal(num) {
  return Math.round(num * 10) / 10;
}

const convertToCelsius = function (temp) {
  return roundToOneDecimal(((temp - 32) * 5) / 9);
};

const convertToFahrenheit = function (temp) {
  return roundToOneDecimal((temp * 9) / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
