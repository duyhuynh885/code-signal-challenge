// cách 1
function makeArrayConsecutive2(statues) {
  let count = 0;
  statues.sort((a, b) => a - b);
  if (statues.length === 1) return 0;
  for (let index = 0; index < statues.length; index++) {
    if (index === statues.length - 1) return count;
    if (!(statues[index + 1] - statues[index] === 1))
      count += statues[index + 1] - statues[index] - 1;
  }
  return count;
}
// cách 2
function makeArrayConsecutive2(sequence) {
  return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length;
}

