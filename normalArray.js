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
console.log(reverseString("hi my name is mahmod1")); // Output: 'domham si eman ym ih'
//// another way

function reverce2(str) {
  if (!str || str.length < 1 || typeof str !== "string") {
    return "oohhhh somthin is wrong";
  }
  const backword = [];
  const totleItems = str.length - 1;
  for (let i = totleItems; i >= 0; i--) {
    backword.push(str[i]);
  }
  console.log(backword);
  return backword.join("");
}
console.log(reverce2("my name is mahmoood2"));

// another way
// Another way using split, reverse, and join
function reverse3(str) {
  return str.split("").reverse().join(""); // Split string into characters, reverse them, and join back to a string
}
console.log(reverse3("my name is mahmooood3"));

// Another way using arrow function syntax
const reverse4 = (str) => [...str].reverse().join(""); // Spread operator to create an array, then reverse and join
console.log(reverse4("my name is mahmooood4"));

///////////////////////////////////////////////////////////////////////

// merge 2 arrays
// Function to merge two arrays
function mergeArray(arr1, arr2) {
  const mergedArr = arr1.concat(arr2); // Use concat to merge the two arrays
  const sortedArr = mergedArr.sort((a, b) => a - b);

  return sortedArr;
}
console.log(mergeArray([1, 2, 30], [2, 7, 8, 5])); // Output: [1, 2, 2, 5, 7, 8, 30]
// another way
function mergeeArrayrSorted(arr1, arr2) {
  const mergeeArrayr2 = [];
  const array1Itme = arr1[0];
  const array2Itme = arr2[0];

  //   check
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (array1Itme || array2Itme) {}

  return mergeeArrayr2;
}
mergeeArrayrSorted([1, 2, 5, 30], [2, 5, 8, 4]);
