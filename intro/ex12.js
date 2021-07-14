/**
 * 
 * @param {*} a 
 * @date 14/7/2021
 */
function sortByHeight(a) {
    var people = a.filter((el) => el != -1);
    people.sort((a, b) => b - a);
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== -1) {
        a[i] = people.pop();
      }
    }
    return a;
}
let a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));
