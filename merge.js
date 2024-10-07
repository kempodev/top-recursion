function mergeSort(array) {
  if (array.length < 2) return array;

  const mid = array.length / 2;
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const output = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      output.push(left.shift());
    } else {
      output.push(right.shift());
    }
  }
  return [...output, ...left, ...right];
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110, 88]));
