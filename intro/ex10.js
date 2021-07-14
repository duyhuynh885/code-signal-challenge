/**
 *commonCharacterCount
 * @param {number} s1
 * @param {number} s2
 * @date 14/7/2021

 */
function commonCharacterCount(s1, s2) {
  let count = 0;
  let tempS1 = s1.split("");
  let tempS2 = s2.split("");
  for (let i = 0; i < tempS1.length; i++) {
    for (let j = 0; j < tempS2.length; j++) {
      if (tempS1[i] == tempS2[j]) {
        count++;
        tempS2.splice(j, 1, true);
        break;
      }
    }
  }
  return count;
}

let s1 = "zzzz";
let s2 = "zzzzzzz";
console.log(commonCharacterCount(s1, s2));
