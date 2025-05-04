/*
// تنفيذ 100 ريكويست ف نفس الوقت
const axios = require("axios");
// إنشاء 100 طلب
const requests = Array.from({ length: 100 }, (_, i) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${i + 1}`)
);

// معالجة كل الطلبات معًا
Promise.all(requests)
  .then((responses) => {
    responses.forEach((res) => console.log(res.data));
  })
  .catch((err) => console.error("Error:", err));
*/
/////////////////////////////////////////////////////////////////
// 2 . تحويل Callback Hell إلى Promises

/*
الشرح:
Callback Hell هو عندما يكون لديك أكواد متداخلة بسبب استخدام Callbacks،
 مما يجعل الكود صعب القراءة. الحل هو استخدام Promises لجعله أنظف
.*/

// مثال قبل التحويل (Callback Hell):

getUser(userId, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});
// بعد التحويل إلى Promises:
function getUserAsync(userId) {
  return new Promise((resolve) => getUser(userId, resolve));
}

getUserAsync(userId)
  .then((user) => getPostsAsync(user.id))
  .then((posts) => getCommentsAsync(posts[0].id))
  .then((comments) => console.log(comments))
  .catch((err) => console.error(err));
//////////////////////////////////////////
// 3 تحديد  عدد مرات تنفيذ داله فالثانيه
function throttle(func, delay) {
  let lastExecuted = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastExecuted >= delay) {
      func(...args);
      lastExecuted = now;
    }
  };
}

// استخدامها
const throttledFn = throttle(() => console.log("Called!"), 1000);
throttledFn(); // تُنفذ فقط إذا مرت ثانية منذ آخر تنفيذ
///////////////////////////////////
// 4
/*
Debouncing
 يعني تأجيل تنفيذ الدالة حتى يتوقف المستخدم عن الكتابة (مثلاً في شريط البحث).
*/
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

// استخدامها
const debouncedSearch = debounce(() => console.log("Searching..."), 500);
debouncedSearch();

/*
اكتب دالة تتحقق إذا كانت كلمة palindrome.

اكتب دالة تعد تكرار كل حرف في string.

اكتب دالة تجمع كل الأرقام داخل string (مثل "a2b3" تطلع 5).

اكتب دالة ترجع أول حرف مكرر في string.

اكتب دالة تحول string إلى camelCase.

 */
function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
