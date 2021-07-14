function makeIncreasing(numbers) {
    for (let index = 0; index < numbers.length; index++) {
        let tempArr = numbers.slice(0)
        tempArr.splice(index, 1,reverse_a_number(numbers[index]));
        if (isIncreasingSequence(tempArr)) {
            return true;
        }
    }
    return false
}

function isIncreasingSequence(sequence) {
    for (var i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            return false;
        }
    }
    return true;
}

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(makeIncreasing([1, 3, 900, 10]));