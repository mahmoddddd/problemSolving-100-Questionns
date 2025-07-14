 /////////////////////////////
 /*
//  1 Even and odd numbers //  

function evenOrOdd(number) {
       if (number % 2 === 0 )
        return "even"
         
     else{
        return  "Odd"
     }}
    console.log(evenOrOdd(1));
    */









///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 2 
/*
 Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 
1
+
7
+
12
=
20
1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.*/
  


/*
function positiveSum(arr) {
     

    let sum = 0
for ( let i = 0 ; i<arr.length;i++){
     
    if(arr[i] > 0) 
         { 
             sum = sum + arr[i]
         }

}
return sum

}
console.log(positiveSum([1, 2, 5, 7, -4])); // الناتج = 15
*/ 












///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3 
/*
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0. 
*/




  // لو عايز تنجز مش مهم بيرفورمانس 
  /*
  let min = Math.min(...array);
  let max = Math.max(...array);
  */ 
 /*
  function sumArray(array) {
  if (!array || array.length <= 2) return 0;

  let sum = array[0]; // first element of the array
  let min = array[0]; // first element of the array
  let max = array[0]; // first element of the array

  for (let i = 1; i < array.length; i++) {

    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
    sum += array[i];
  }

  return sum - min - max;
}

console.log(sumArray([6, 2, 1, 8, 10])); // ✅ الناتج: 16
*/






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4 
/*
Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/
/*
function repeatStr (n, s) {
     return s.repeat(n)

}
console.log(repeatStr(2, "I"));
*/
/*
 // Way 2 With Loop No using repeat 
function repeatStr (n, s) {
let results = ''
for (let i =0;i<n;i++){
       results = results + s 
}
return results
}
console.log(repeatStr(3, "Hi")); // "HiHiHi"
console.log(repeatStr(0, "A"));  // ""
console.log(repeatStr(1, "B"));  // "B"
*/





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4 




