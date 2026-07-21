const convertToCelsius = function (number1) {
  let celsius = (number1 - 32) * (5 / 9);

  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function (number1) {
  let fahrenheit = number1 * (9 / 5) + 32;

  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
