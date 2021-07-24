/**
 * Three dots ( … ) in JavaScrip
 */
// VD 1:
//Without Spread syntax (...)
const arr = [1, 3];
function add(x, y) {
  // here receive parameter x, y
  return x + y; // return addition of x and y
}
const result = add(arr[0], arr[1]); // here pass manually array's values
console.log(result);
//With Spread syntax (...)

const arr = [1, 3, 6];
function add(x, y, z) {
  // here receive parameter x, y
  console.log(x, y, z);
  return x + y + z; // return addition of x and y
}
const result = add(...arr); // i.e spread syntax automatically assign the values
console.log(result);
//VD2
//liên quan đến immutable (Tính bất biến trong javascript)
//Without Spread syntax (...)
var new_arr  = ['a', 'b', 'c', 'd'];
var new_arr2 = new_arr;
new_arr2.push('e');