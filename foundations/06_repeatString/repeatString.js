const repeatString = function (string1, amount) {
  let newString = string1;
  let number = 0;
  let numberCheck = amount - 1;

  if (amount === 0) {
    return "";
  }

  if (amount < 0) {
    return "ERROR";
  }
  while (number < numberCheck) {
    newString += string1;
    number += 1;
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
