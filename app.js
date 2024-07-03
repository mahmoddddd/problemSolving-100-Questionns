// fibonanacci sequence
// fibonancci (2)= [0,1]
// fibonancci (3)= [0,1,1]
// fibonancci (4)= [0,1,1,2]
// fibonancci (7)= [0,1,1,2,3,5,8]
/*
function fibonanacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    //اول حاجه اوصل للرقم بالي هو مديهولك
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(`fibonanacci ${fibonanacci(2)}`); // [0,1]
console.log(`fibonanacci ${fibonanacci(3)}`); // [0,1,1]
console.log(`fibonancci ${fibonanacci(4)}`); // [0,1,1,2,3,5,8]
// Big O = O(n)
*/
/////////////////////////////////////////////////////////////
// factorial number

/* 
// factorial (5)= 5*4*3*2*1 = 120
// factorial (6)= 6*5*4*3*2*1 = 720
function factorial(n) {
  let result = 1;
  //اول حاجه اوصل للرقم بالي هو مديهولك
  for (let i = 1; i <= n; i++) {
    // o(n)
    // لاحظ هنا يساوي عشان برب الرقم نفسو كمان مع الضرب
    result = result * i;
  }
  return result;
}
console.log(`factorial ${factorial(5)}`); // [5*4*3*2*1] = 120

// O = O(n)
*/
////////////////////////////////////////////////////////////////////////
// prime Number //عدد اولي
/* 
function isPrime(n) {
  if (n < 2) {
    return false; // o(1)
  }
  //   for (let i = 2; i < n; i++) { // old
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // i <= Math.sqrt(n) =>  // O(sqrt(n)
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); //true
console.log(isPrime(4)); // false

// O(sqrt(n)
*/
///////////////////////////////////////////////////////////

// Function to check if a number is a power of two
// bitwith =  [1 , 1] = 1 else 0    // O(1)
/*
function isPowerOfTwo(n) {
  if (n === 1) return true; // 2^0 = 1, so this should return true // o(1)
  if (n === 0 || n % 2 !== 0) return false; // o(1)
  return isPowerOfTwo(n / 2); // Big O = O(log(n))
}
console.log("Power of two");
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false
// Big O = O(log(n))
*/

// Function to check if a number is a power of two using bitwise operations
/*
function isPowerOfTwo(n) {
  // A number n is a power of two if n > 0 and (n & (n - 1)) == 0
  return n > 0 && (n & (n - 1)) === 0;
}
console.log("Power of two");
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false
// Big O = O(1)
*/

//////////////////////////////////////////////////////////////////////////////

/*
function recursiveFibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1; // O(2**n)
  } else {
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  }
}

// Calculate the 5th Fibonacci number
const result = recursiveFibonacci(5);
console.log(result); // Outputs: 5
*/

/*
function rescursiveeFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * rescursiveeFactorial(n - 1); // Big (O) =O(N)
}
console.log(rescursiveeFactorial(5));
*/
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////

// Search Method 1
/*
function search(n) {
  let arr = [1, 2, 3, 4, 5];
  if (arr.includes(n)) {
    return arr.indexOf(n); // O(N)
  } else {
    return -1;
  }
}
console.log(search(5));
console.log(search(1));
*/

//Search Method 2
/*
function anotherSearch(n) {
  let arr = [1, 2, 3, 4, 5];
  let i = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      // o(N)
      return arr.indexOf(n);
    }
  }
  return -1;
}
console.log(anotherSearch(2));
console.log(anotherSearch(3));
*/

// // Search Method 3
/*
function linearSearch(arr, target) {
  let i = 0;
  for (let i = 0; i < arr.length; i++) {
    // o(N)
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5], 2));
*/

///////////////////////////////////////////////////

// // Binary Search Method 4
/*
function binarySearch(arr, target) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Element is not found
}

console.log(binarySearch([1, 2, 3, 4, 5], 4)); // Output: 3
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // Output: 0
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: -1
*/

///////////////////////////////////////////////////

// // recursive solution of binary search
/*
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Element not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5], 5));
*/

/*
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // `n - i - 1` لتجنب المقارنة مع العناصر المرتبة بالفعل
      if (arr[j] > arr[j + 1]) {
        // تبديل العناصر
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

let arrayToSort = [1, 2, 5, 8, 13, 9, 6, 12, 10];
console.log(bubbleSort(arrayToSort));

*/

/*
function bubbleSortSwaped(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
const arr = [1, 2, 8, 5, 7, 1, 9, 5, 4, 2, -2];
bubbleSortSwaped(arr);
console.log(arr);
// 2 nested loop (O**n)
*/

/*
// same function bt not dublicate numbers without use filter
function bubbleSortSwapped(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
// Easy way
// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// Logic Way
function removeDuplicates(arr) {
  if (arr.length === 0) return [];

  let uniqueArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

const arr = [1, 2, 8, 5, 7, 1, 9, 5, 4, 2, -2];
bubbleSortSwapped(arr);
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr); // Outputs: [-2, 1, 2, 4, 5, 7, 8, 9]
*/

// Insertion Sort
/*
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1; // j equal sorted part
    // لو نقصت واحد ولسه اكبر منها ؟؟ بعمل وايل لوووب
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Shift element one position to the right
      j--; // Move to the previous element
    }

    arr[j + 1] = current; // Place current element in the correct position
  }
}

const arr = [9, 2, 5, 93, 7, 41];
insertionSort(arr);
console.log(arr); // Output: [2, 5, 7, 9, 41, 93]
*/

/*
// Qick Sort
function quickSort(arr) {
  if (arr.length < 2) {
    return arr; // Base case: arrays with 0 or 1 element are already sorted
  }

  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const arr = [1, 2, 8, 5, 4, -5, 3];
const sortedArr = quickSort(arr);
console.log(sortedArr); // Outputs: [-5, 1, 2, 3, 4, 5, 8]
// worest case : o**n
// avarege case : on (nlogn)
/*
/////////////////////////////////////////////


// Cartesian Product
/*
function cartesian(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]); // add normal elementas indexess to result array
    }
  }
  return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesian(arr1, arr2));
big O = O(n * m)
*/

function climbingStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbingStairs(n - 1) + climbingStairs(n - 2);
} // Big O = O(2^n)

console.log(climbingStairs(5));
