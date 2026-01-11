//Hoisting

console.log(x === undefined); // true
var x = 3;
console.log(x); 
(function () {
  console.log(x); // undefined
  var x = "local value";
})();