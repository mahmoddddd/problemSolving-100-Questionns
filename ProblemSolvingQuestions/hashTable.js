class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let totale = 0;
    for (let i = 0; i < key.length; i++) {
      totale += key.charCodeAt(i);
    }
    return totale % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
    if (this.table[index] === undefined) {
      this.table[index] = value;
    } else {
      firstIndex = table[index][0];
      nextOne = this.table[index][1];
    }
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
const myTable = new HashTable(10);

myTable.set("name", "Ali");
myTable.set("age", 30);

console.log(myTable.get("name")); // "Ali"
myTable.remove("name");

myTable.display(); // يعرض فقط "age"

//
