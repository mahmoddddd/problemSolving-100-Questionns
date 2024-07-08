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
