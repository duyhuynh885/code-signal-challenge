/**
 * adjacentElementsProduct cách 2
 * @param {array} inputArray 
 * @returns 
 */
function adjacentElementsProduct(inputArray) {
  let max = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] * inputArray[i + 1] > max)
      max = inputArray[i] * inputArray[i + 1];
  }
  return max;
}

/**
 * adjacentElementsProduct cách 2
 * @param {*} arr 
 * @returns 
 */
function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]));
}
