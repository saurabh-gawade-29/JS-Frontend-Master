// TODO: NaN (Not a Number <==== Wrong)
// TODO: NaN (Invalid Number <==== Right)

var myAge = Number("0o46"); // 38
console.log("🚀 ~ file: 3.SpecialValues.js ~ line 5 ~ myAge", myAge);

var myNextAge = Number(39); //39
console.log("🚀 ~ file: 3.SpecialValues.js ~ line 8 ~ myNextAge", myNextAge);

var myCatAge = Number("n / a"); //NaN
console.log("🚀 ~ file: 3.SpecialValues.js ~ line 11 ~ myCatAge", myCatAge);

// TODO:
myAge = "My Sons Age"; // NaN
console.log("🚀 ~ file: 3.SpecialValues.js ~ line 15 ~ myAge", myAge);

// TODO:
// NaN === NaN    ===> False
console.log(myCatAge === myCatAge); // False

var check = isNaN(myCatAge);
console.log(check);
