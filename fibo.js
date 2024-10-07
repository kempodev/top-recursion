function fibs(n) {
  if (n < 1 || typeof n !== 'number') return 'Invalid input';
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const output = [0, 1];
  for (let i = 2; i < n; i++) {
    output.push(output[i - 1] + output[i - 2]);
  }
  return output;
}

function fibsRec(n) {
  if (n < 1 || typeof n !== 'number') return 'Invalid input';
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const output = fibsRec(n - 1);
  output.push(output[output.length - 1] + output[output.length - 2]);
  return output;
}

console.log(fibs(8));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs('abc'));
console.log(fibs(15));

console.log(fibsRec(8));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec('abc'));
console.log(fibsRec(15));
