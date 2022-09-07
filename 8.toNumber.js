//TODO: String to Number TypeCasting

//! "" : 0;
//* "0" : 0;
//* "-0" : 0;
//* "009" : 9;
//* "3.14" : 3.14;
//* "0" : 0;
//* ".0" : 0;
//* "," : NaN;
//* false : 0;
//* true: 1
//* null : 0;
//* undefined: NaN;

//! Some WTF Cases:

// [""] : 0;
// ["0"] : 0;
// ["-0"] : 0;
// [null] : 0;
// [undefined] : 0;
// [1,2,3] : NaN;
// [[[[]]]] : 0

var a = Number("");
console.log(a);
