"use strict";
var teacher = "Kyle";

function otherClass() {
  var teacher = "Saurabh";
  var IMP_VAR = "Check for line no 11";
  console.log("🚀teacher", teacher);
  console.log("welcome!");
}

console.log("Line no 9", teacher);

function ask() {
  var question = "Why?";
  console.log(question);
}

otherClass();
ask();

// console.log(IMP_VAR); // Here You get a Type Ref Error
