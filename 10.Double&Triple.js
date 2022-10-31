var workshop1 = { name: "saurabh" };
var workshop2 = { name: "saurabh" };

console.log(workshop1 == workshop2); // false
console.log(workshop1 === workshop2); // false

var a = null;
var b = undefined;
console.log(a == b);
console.log(a === b);

var c = "3.7"; // in int and string both are different
var d = "3.07"; // in int and string both are different
console.log(c == d);
console.log(c === d);

var e = 42;
var f = [42];
console.log(e == f);

var g = [];
var h = [];
console.log(g == h); // False
console.log(g === h); // False
console.log(g == !h); //! true
console.log(!g == h); //! true
console.log(!g == !h); //! true
