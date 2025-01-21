// You get an array of numbers, return the sum of all of the positives ones.

//  Example
//  [1, -4, 7, 12] => 1 +7 + 12 = 201 + 7 + 12 = 20

/*

Array Loop
check if nm is postive or negative
Intial Num = 0 
Add numm to initial one if positive 
*/

function positiveSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}
console.log(positiveSum([1, 2, 3, 4, -5]));

// Way 2
function positiveSum(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
}
console.log(positiveSum([1, 2, -20, 4, 3, 4, -5]));
