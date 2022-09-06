var v;
console.log(typeof v); // undefined

v = "1";
console.log(typeof v); // String

v = 1;
console.log(typeof v); // number

v = true;
console.log(typeof v); // boolean

v = {};
console.log(typeof v); // Object

v = Symbol();
console.log(typeof v); // Symbol

v = null;
console.log(typeof v); // Object

v = function () {};
console.log(typeof v);

v = [1, 2, 3];
console.log(typeof v);

//! Undefined vs Undeclared vs uninitialized
