// Node class representing each element in the linked list
class Node {
  constructor(data, next = null) {
    this.data = data; // The data stored in the node
    this.next = next; // The reference to the next node in the list
  }
}

// LinkedList class to manage the linked list
class LinkedList {
  constructor() {
    this.head = null; // Initialize the head of the list to null
    this.size = 0; // Initialize the size of the list to 0
  }

  // Method to add a node at the beginning of the list
  addFirst(data) {
    this.head = new Node(data, this.head); // Create a new node and make it the head
    this.size++; // Increment the size of the list
  }

  // Method to add a node at the end of the list
  addLast(data) {
    let newNode = new Node(data); // Create a new node
    if (!this.head) {
      // If the list is empty
      this.head = newNode; // Make the new node the head
    } else {
      let current = this.head; // Start from the head
      while (current.next) {
        // Traverse the list until the last node
        current = current.next;
      }
      current.next = newNode; // Make the last node point to the new node
    }
    this.size++; // Increment the size of the list
  }

  // Method to add a node at a specific index
  addAtIndex(data, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.addFirst(data);
      return;
    }

    const node = new Node(data);
    let prev;
    let current = this.head;
    let count = 0;

    while (count < index) {
      prev = current;
      count++;
      current = current.next;
    }

    // Insert the node
    prev.next = node;
    node.next = current;
    this.size++; // Increment the size of the list
  }

  // Remove a node with a specific value
  remove(value) {
    if (this.head === null) return null;

    if (this.head.data === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current !== null && current.data !== value) {
      previous = current;
      current = current.next;
    }

    if (current !== null) {
      previous.next = current.next;
      this.size--;
    }
  }

  // Check if the list contains a specific value
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }

  // Print the list values
  print() {
    let current = this.head;
    let values = [];
    while (current !== null) {
      values.push(current.data);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }

  // Method to get data of all nodes
  getData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage
const list = new LinkedList();
list.addFirst(1);
list.addLast(2);
list.addLast(3);
list.print(); // Output: 1 -> 2 -> 3

list.remove(2);
list.print(); // Output: 1 -> 3

console.log(list.contains(1)); // Output: true
console.log(list.contains(2)); // Output: false

const li = new LinkedList();
li.addFirst(10);
li.addFirst(20);
li.addFirst(30);
li.addFirst(40);
li.addLast(50);
li.addAtIndex(25, 2);
li.addFirst(5456);

li.getData(); // Output: 5456 40 30 25 20 10 50
