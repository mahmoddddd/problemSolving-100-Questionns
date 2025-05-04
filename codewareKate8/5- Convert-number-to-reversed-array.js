// Convert number to reversed array of digits

function digitize(n) {
  if (n === 0) {
    return [0];
  }
  return String(n).split("").reverse().map(Number);
}

console.log(digitize(53)); // Output: [3, 5]
console.log(digitize(35231)); // Output: [1, 3, 2, 5, 3]
console.log(digitize(0)); // Output: [0]
