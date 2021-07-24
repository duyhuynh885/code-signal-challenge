/**
 * #Scope
 * - Các loại phạm vi
 *      - Global - Toàn cầu
 *      - Code block - Khối mã : let , const
 *      - Local scope - Hàm : var, function
 */

function logger() {
  function child() {
    var counter = 0;
  }
  console.log(counter);
}
logger();
