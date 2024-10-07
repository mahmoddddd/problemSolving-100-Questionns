//
////////////////////////////////////////////
// implement array with ztom udemy course with my practical
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  getIndex(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    delete this.data[this.length - 1];
    // بنمسح اخر عنصر عشان لازم اللوب جت عند الاخر ووقفت
    // .. فالشيفت بيبدل وبيفضل اخر عنصر زي م هو فبنمسحو
    this.length--;
    return item;
  }
  shiftItems(index) {
    // الخطوة دي عشان الوووب بس
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const array = new MyArray();
array.push("lll");
array.push("222");
array.push("333");
array.push("444");
array.delete(2);

console.log(array);
//////
// exercise reverce string
// 'hi my name is mahmod' shoud be 'odmah si eman ym ih'

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // loop on from last to first
    reversed += str[i]; // Append each character to the reversed string
  }
  return reversed;
}
console.log(reverseString("hi my name is mahmod")); // Output: 'domham si eman ym ih'
