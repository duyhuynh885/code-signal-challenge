/**
 * addBorder
 * @param {Array} a
 * @date 15/7/2021
 */
// cach 1
function addBorder(picture) {
  let newPicture = picture.map((ele) => `*${ele}*`);
  const sizeOfString = newPicture[0].length;
  newPicture.push("*".repeat(sizeOfString));
  newPicture.unshift("*".repeat(sizeOfString));
  return newPicture;
}

const picture = ["abc", "ded"];
console.log(addBorder(picture));
// cach 2
function addBorder(picture) {
  var width = picture[0].length + 2;
  return [
    "*".repeat(width),
    ...picture.map((line) => `*${line}*`),
    "*".repeat(width),
  ];
}
