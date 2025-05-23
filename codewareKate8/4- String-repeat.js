// Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repetStr(n, s) {
  const ss = s.repeat(n);
  console.log(ss);
}
repetStr(2, "k");

// Way 2
function repetSttr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}
console.log(repetSttr(2, "j"));
