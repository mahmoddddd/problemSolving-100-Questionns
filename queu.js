class Queue {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  enqueue(ele) {
    this.items.push(ele);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    //return this.items.length[this.items.length - 1]; // last element
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}
// Create a new queue
const queue = new Queue();
queue.enqueue(1); // Adds 1 to the queue
queue.enqueue(2); // Adds 2 to the queue
queue.enqueue(3); // Adds 3 to the queue

console.log(queue.peek()); // Output: 1 (front element)

console.log(queue.dequeue()); // Output: 1 (removes and returns the front element)

console.log(queue.peek()); // Output: 2 (front element after dequeue)

console.log(queue.size()); // Output: 2 (number of elements in the queue)

queue.print(); // Output: 2,3 (prints the queue elements)

console.log(queue.isEmpty()); // Output: false (queue is not empty)

queue.dequeue(); // Removes 2 from the queue
queue.dequeue(); // Removes 3 from the queue

console.log(queue.isEmpty()); // Output: true (queue is now empty)

console.log(queue.peek()); // Output: null (queue is empty)
