/**
 * areSimilar
 * @param {Array} a
 * @param {Array} b
 * @date 15/7/2021
 */
function areSimilar(a, b) {
  // for (let i = 0; i < a.length; i++) {
  //   for (let j = i; j < a.length; j++) {
  //     console.log(i);
  //     console.log(j);
  //     let temp = a[i];
  //     a[i] = a[j];
  //     a[j] = temp;
  //     if (JSON.stringify(a) === JSON.stringify(b)) return true;
  //     a[j] = a[i];
  //     a[i] = temp;
  //   }
  // }
  // return false;
}
function areSimilar(a, b) {
  var are = true;
  var av = null;
  var bv = null;
  var swap = false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (av === null || bv === null) {
        av = a[i];
        bv = b[i];
      } else {
        if (swap || av !== b[i] || bv !== a[i]) {
          are = false;
        }
        swap = true;
      }
    }
  }
  return are;
}
let a, b;
a = [1, 2, 3];
b = [2, 1, 3];
console.log(areSimilar(a, b));
