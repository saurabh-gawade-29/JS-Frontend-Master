var teacher = "kyle";

function otherClass() {
  var teacher = "Suzy";
  function ask(question) {
    console.log(teacher, question);
  }

  ask("test"); // Output: Suzy , Test
}
// ask("???"); // If you un-comment it you wil get error like ask is not defined
otherClass();
