function checkValue(value, check) {
  return value !== check;
}

function removeFromArray(array1, ...remove) {
  const filtered = array1.filter((value) => !remove.includes(value));
  console.log(filtered);
  return filtered;
}

removeFromArray([1, 2, 3, 4], 3, 2);

// npm test removeFromArray.spec.js
// Do not edit below this line
module.exports = removeFromArray;
