class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // PUSH
  push(ele) {
    this.items[this.count] = ele;
    console.log(`element ${ele} added to stack position ${this.count}`);
    this.count++;
  }

  // POP
  pop() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }
    const removeElm = this.items[this.count - 1]; // index != count number
    console.log(
      `element ${removeElm} removed from stack position ${this.count - 1}`
    );
    this.count--;
    return removeElm;
  }

  // Check if stack is empty
  isEmpty() {
    return this.count === 0;
  }

  // Return the size of the stack
  size() {
    return this.count;
  }

  // Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("stack is emptyy");
      return;
    }
    return this.items[this.count - 1];
  }
}

// Usage example
const stack = new Stack();
stack.push(1); // Output: element 1 added to stack position 0
stack.push(2); // Output: element 2 added to stack position 1
stack.push(2);
stack.pop();
stack.pop();
console.log(`stack size ${stack.size()}`);
console.log(`stack top element ${stack.peek()}`);

// problem solving in leetCode >> Valid Parentheses

function isValidParentheses(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    if (char in map) {
      stack.push(char);
    } else if (stack.length === 0 || map[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
}

// Usage examples
console.log(isValidParentheses("()")); // Output: true
console.log(isValidParentheses("()[]{}")); // Output: true
console.log(isValidParentheses("(]")); // Output: false
console.log(isValidParentheses("([)]")); // Output: false
console.log(isValidParentheses("{[]}")); // Output: true

// minStack Problem
// Constructor function for MinStack
var MinStack = function () {
  // Initialize two stacks:
  // stack: to store all the elements
  // minStack: to store the minimum elements
  this.stack = [];
  this.minStack = [];
};

// Push function to add an element to the stack
MinStack.prototype.push = function (val) {
  // Push the value onto the main stack
  this.stack.push(val);

  // If minStack is empty or the new value is less than or equal to the current minimum,
  // push it onto the minStack
  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

// Pop function to remove the top element from the stack
MinStack.prototype.pop = function () {
  // Pop the value from the main stack
  const poppedValue = this.stack.pop();

  // If the popped value is the same as the top element of the minStack,
  // pop it from the minStack as well
  if (poppedValue === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

// Top function to get the top element of the stack without removing it
MinStack.prototype.top = function () {
  // Return the top element of the main stack
  return this.stack[this.stack.length - 1];
};

// GetMin function to retrieve the minimum element in the stack
MinStack.prototype.getMin = function () {
  // Return the top element of the minStack, which is the current minimum
  return this.minStack[this.minStack.length - 1];
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top()); // Output: 0
console.log(minStack.getMin()); // Output: -2
/* Example 1:
 * After pushing -2, 0, and -3, the stack is [-2, 0, -3] and the minStack is [-2, -3].
 * getMin() returns -3, the current minimum.
 * After pop(), the stack is [-2, 0] and the minStack is [-2].
 * top() returns 0, the current top element.
 * getMin() returns -2, the new current minimum.
 */
