// Questions 

console.log(y); // ReferenceError: y is not defined
y = 1;

/* ***************************************************** */

console.log(y); // undefined 
var y = 2;

/* ***************************************************** */


y = 3;
console.log(y); // 3
var y;

/* ***************************************************** */


var a = 1;
console.log(a); // 1
var a = 2;
console.log(a); // 2

/* ***************************************************** */


var z = 1;
let z;
console.log(z); // Identifier 'z' has already been declared

/* ***************************************************** */


console.log(z);
let z = 1; // TDZ

/* ***************************************************** */



function hoistExample() {
    var a;
    console.log("Before: ", a);  //undefined
    a = 10;
    console.log("After: ", a);  //10
}
hoistExample();


/* ***************************************************** */


function hoistingExample() {
    console.log("Value of a in local scope: ", a); // 1
}
console.log("Value of a in global scope: ", a); //undefined
var a = 1;
hoistingExample();


/* ***************************************************** */



function hoistingExample() {
    a = 1;
}
hoistingExample();
console.log(a); // 1

/* ***************************************************** */


function hoistingExample() {
    var a = 1;
}
hoistingExample();
console.log(a); //// ReferenceError: a is not defined

/* ***************************************************** */


function a() {
    console.log("1")
}
a(); // 2
function a() {
    console.log("2")
}
a(); // 2


/* ***************************************************** */


var test = 1;

function functionHoisting() {
    test = 10;
    return;
    function test() { }
}
functionHoisting();
console.log(test); // 1

/* ***************************************************** */


alert(a()); // 3
function a() {
  var b = function() {
    return 3;
  };
  return b();
  var b = function() {
    return 8;
  };
}

/* ***************************************************** */


alert(a()); // 8
function a() {
  function b() {
    return 3;
  }
  return b();
  function b() {
    return 8;
  }
}


/* ***************************************************** */

var variable = 10;
(()=>{
   console.log(variable);
   var variable = 20;
   console.log(variable);
})(); // undefined 20

/* ***************************************************** */

var variable = 10;
(()=>{
   console.log(variable);   //TDZ
   let variable = 20;
   console.log(variable);   // 20
})();

/* ***************************************************** */

var variable = 10;
(()=>{
   console.log(variable);   //10
   variable = 20;
   console.log(variable);   // 20
})();

/* ***************************************************** */

var variable = 10;
(()=>{
   console.log(variable);   // 10
   variable = 20;
   console.log(variable);   // 20
})();
var variable = 30;
console.log(variable); // 30

/* ***************************************************** */

var variable = 10;
(()=>{
   console.log(variable);   // undefined
   var variable = 20;
   console.log(variable);   // 20
})();

console.log(variable);
var variable = 30;

/* ***************************************************** */

var variable = 10;
(()=>{
   console.log(variable);   // undefined
   var variable = 20;
   console.log(variable);   // 20
})();

console.log(variable); // 10
var variable = 30;

/* ***************************************************** */

var variable = 10;
(()=>{
   console.log(variable);   // 10
   variable = 20;
   console.log(variable);   // 20
})();

console.log(variable); // 20
var variable = 30;

/* ***************************************************** */


var variable = 10;
(()=>{
   variable_3 = 35;
   console.log(variable_3); // 35
   var variable_3 = 45;
   variable_2 = 15; 
   console.log(variable);   //10
})();

console.log(variable_2); // 15
console.log(variable_3); // reference error
var variable=30;

/* ***************************************************** */

