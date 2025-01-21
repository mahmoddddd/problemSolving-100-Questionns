// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// { 6, 2, 1, 8, 10 } => 16

function sumArray(array) {
  let sum = 0;
  let sortedArr = array.sort((a, b) => a - b);
  sortedArr.pop();
  sortedArr.shift();
  for (let i = 0; i < sortedArr.length; i++) {
    sum += sortedArr[i];
  }
  return sum;
}
console.log(sumArray([6, 2, 1, 8, 10])); // 16
// Way  2
function sumArray(array) {
  let sum = 0;
  let min = Math.min(...array);
  let max = Math.max(...array);
  let remoovedValue = max + min;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum - remoovedValue;
}
console.log(sumArray([6, 2, 1, 8, 10])); // 16
