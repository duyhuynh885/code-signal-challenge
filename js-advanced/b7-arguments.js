// Array like object & arguments

// const names = ["Thanh", "Trang", "Thuy"];
// for (let index = 0; index < names.length; index++) {
//   console.log(names[index]);
// }

/*
 *  array like object là object đó phải có property length , và các key là 0,1,2,3..
 */
const obj = {
  0: "Thanh",
  1: "Trang",
  2: "Thuy",
  length: 3,
};

for (let index = 0; index < obj.length; index++) {
  console.log(obj[index]);
}

//--------- arguments ----------
function sum() {
  let result = 0;
  // arguments không cần khai báo , nó sẽ luôn tồn tại trong cái hàm đấy
  // arguments có dạng array like object
  console.log(arguments);
  // tính tổng cách  1
  //   for (let index = 0; index < arguments.length; index++) {
  //     result += arguments[index];
  //   }
  //   return result;

  // tính tổng cách  2 : reduce

  const numbers = Array.from(arguments);

  return numbers.reduce((sum, item) => {
    return sum += item;
  }, 0);
}
console.log(sum(1, 2, 3, 4, 5));



