// class Node in LinkedList
class Node {
  constructor(data, next = null) {
    this.data = data; // The data stored in the node
    this.next = next; // The reference to the next node in the list
  }
}

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

  // Method to get data of all nodes
  getData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
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
}

const li = new LinkedList();
li.addFirst(10);
li.addFirst(20);
li.addFirst(30);
li.addFirst(40);
li.addLast(50);
li.addAtIndex(25, 2); // Corrected the parameters to match data and index
li.addFirst(5456);

li.getData();
