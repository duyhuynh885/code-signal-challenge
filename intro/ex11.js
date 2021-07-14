//cách 1
/**
 * 
 * @param {*} n 
 * @date 14/7/2021
 */
function isLucky(n) {
  let number = n.toString();
  let n1 = number.substring(0, Math.floor(number.length / 2));
  let n2 = number.substring(Math.floor(number.length / 2), number.length);
  return getSum(n1) === getSum(n2);
}

const getSum = (n) => {
  var arr = n.split("").map(function (item) {
    return parseInt(item, 10);
  });
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

console.log(isLucky(1230));

//cách 2
function isLucky(n) {
  var count = 0;
  n = String(n)
    .split("")
    .map((t) => {
      return parseInt(t);
    });
  n.forEach((el, i) => {
    // nếu ở nữa mạng đầu sẽ cộng ele vào count -- tiếp nữa mạng sau sẽ trừ count -- kết quả count == 0 thì true
    i < n.length / 2 ? (count += el) : (count -= el);
  });
  return count == 0;
}
