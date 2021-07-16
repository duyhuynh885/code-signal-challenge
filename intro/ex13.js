/**
 * 
 * @param {*} inputString
 * @date 15/7/2021
 */
function reverseInParentheses(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}
console.log(reverseInParentheses("foo(bar(baz))blim"));;
