// chek if vale even or odd
function evenOdd(value) {
  if (value % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOdd(2));

// Way 2

function evenOdd(value) {
  return value % 2 == 0 ? "Even" : "Odd";
}
console.log(evenOdd(2));
