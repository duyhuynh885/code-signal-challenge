function allLongestStrings(inputArray) {
  const maxLenth = Math.max(...inputArray.map((el) => el.length));
  return inputArray.filter(ele=> ele.length === maxLenth)
}

console.log(allLongestStrings(inputArray));
