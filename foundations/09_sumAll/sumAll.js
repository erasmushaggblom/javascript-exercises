const sumAll = function (number1, number2) {
  let highBound = 0;
  let lowBound = 0;

  if (
    Number.isInteger(number1) === false ||
    Number.isInteger(number2) === false ||
    number1 < 0 ||
    number2 < 0
  ) {
    return "ERROR";
  }

  if (number1 > number2) {
    lowBound = number2;
    highBound = number1;
  }

  if (number2 > number1) {
    lowBound = number1;
    highBound = number2;
  }

  let newArray = Array.from(
    { length: highBound - lowBound + 1 },
    (_, i) => lowBound + i,
  );

  let sumArray = newArray.reduce((total, number) => total + number, 0);

  return sumArray;
};

// Do not edit below this line
module.exports = sumAll;
