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


/*
// linkedlist with tail
// نود كلاس لتمثيل كل عنصر في القائمة
class Node {
  constructor(data, next = null) {
    this.data = data; // البيانات المخزنة في النود
    this.next = next; // المؤشر للنود اللي بعده في القائمة
  }
}

// لينكد ليست كلاس لإدارة القائمة
class LinkedList {
  constructor() {
    this.head = null; // نبدأ الهيد بـ null
    this.tail = null; // نبدأ التايل بـ null
    this.size = 0; // نبدأ حجم القائمة بـ 0
  }

  // طريقة لإضافة نود في بداية القائمة
  addFirst(data) {
    const newNode = new Node(data, this.head); // نعمل نود جديدة ونخليها الهيد
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode; // لو القائمة كانت فاضية، نخلي التايل هو النود الجديدة
    }
    this.size++; // نزيد حجم القائمة
  }

  // طريقة لإضافة نود في نهاية القائمة
  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      // لو القائمة فاضية
      this.head = newNode; // نخلي النود الجديدة هي الهيد
      this.tail = newNode; // نخلي النود الجديدة هي التايل
    } else {
      this.tail.next = newNode; // نخلي النود الحالية اللي التايل بيشاور عليها تشير للنود الجديدة
      this.tail = newNode; // نخلي التايل يشير للنود الجديدة
    }
    this.size++; // نزيد حجم القائمة
  }

  // طريقة لإضافة نود في مكان محدد
  addAtIndex(data, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.addFirst(data);
      return;
    }
    if (index === this.size) {
      this.addLast(data);
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

    // ندخل النود
    prev.next = node;
    node.next = current;
    this.size++; // نزيد حجم القائمة
  }

  // إزالة نود بقيمة معينة
  remove(value) {
    if (this.head === null) return null;

    if (this.head.data === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null; // لو القائمة أصبحت فاضية، نخلي التايل بـ null
      }
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
      if (current === this.tail) {
        this.tail = previous; // نخلي التايل هو النود اللي قبلها لو النود اللي شلناها كانت التايل
      }
      this.size--;
    }
  }

  // التحقق من وجود قيمة معينة في القائمة
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }

  // البحث عن نود بقيمة معينة
  search(value) {
    let current = this.head;
    let position = 0;

    while (current !== null) {
      if (current.data === value) {
        return position; // نرجع مكان القيمة لو لقيناها
      }
      current = current.next;
      position++;
    }

    return -1; // نرجع -1 لو ما لقيناهاش
  }

  // طباعة قيم القائمة
  print() {
    let current = this.head;
    let values = [];
    while (current !== null) {
      values.push(current.data);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

// مثال على الاستخدام
const list = new LinkedList();
list.addFirst(1);
list.addLast(2);
list.addLast(3);
list.print(); // Output: 1 -> 2 -> 3

list.remove(2);
list.print(); // Output: 1 -> 3

console.log(list.contains(1)); // Output: true
console.log(list.contains(2)); // Output: false

console.log(list.search(3)); // Output: 1 (مكان القيمة 3)
console.log(list.search(4)); // Output: -1 (القيمة مش موجودة)
*/
