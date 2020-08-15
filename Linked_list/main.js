let obj1 = { a: true };
let obj2 = obj1; // Both are pointers

obj1.a = false;
delete obj1;
console.log(obj2); // obj2 is still pointing at the same location.