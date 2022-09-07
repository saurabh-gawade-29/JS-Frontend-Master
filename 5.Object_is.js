var x = Object.is(45, 45);
var test = NaN === NaN;
console.log(test); // False
var y = Object.is(NaN, NaN); // True
var z = Object.is(0, -0);
console.log(x, y, z);
console.log(Infinity);
