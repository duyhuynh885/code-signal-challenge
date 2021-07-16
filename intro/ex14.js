/**
 * alternatingSums
 * @param {Array} a
 * @date 15/7/2021
 */
function alternatingSums(a) {
  const sum = [0, 0];
  for (let index = 0; index < a.length; index++) {
    if (index == 0) sum[0] += a[0];
    if (index != 0 && index % 2 === 0) sum[0] += a[index];
    if (index != 0 && index % 2 !== 0) sum[1] += a[index];

  }
}
const a = [50, 60, 60, 45, 70];
alternatingSums(a);
