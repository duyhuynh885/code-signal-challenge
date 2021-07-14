/**
 *
 * @param {*} matrix
 * @returns
 * @date 14/7/2021
 */
function matrixElementsSum(matrix) {
  let total = 0;
  for (let j = 0; j < matrix[0].length; j++)
    for (let i = 0; i < matrix.length; i++)
      if (matrix[i][j] === 0) break;
      else total += matrix[i][j];
  return total;
}

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];
console.log(matrixElementsSum(matrix));
