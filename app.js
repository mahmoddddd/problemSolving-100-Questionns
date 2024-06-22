// fibonanacci sequence
// fibonancci (2)= [0,1]
// fibonancci (3)= [0,1,1]
// fibonancci (4)= [0,1,1,2]
// fibonancci (7)= [0,1,1,2,3,5,8]

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

/////////////////////////////////////////////////////////////
// factorial number
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

////////////////////////////////////////////////////////////////////////
// prime Number //عدد اولي
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
///////////////////////////////////////////////////////////

// Function to check if a number is a power of two
// bitwith =  [1 , 1] = 1 else 0    // O(1)
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

// Function to check if a number is a power of two using bitwise operations
function isPowerOfTwo(n) {
  // A number n is a power of two if n > 0 and (n & (n - 1)) == 0
  return n > 0 && (n & (n - 1)) === 0;
}
console.log("Power of two");
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false

// Big O = O(1)
//////////////////////////////////////////////////////////////////////////////
