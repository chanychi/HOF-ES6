//Different ways of creating functions

function add (a, b) {
  return a + b;
};

var add = (a, b) => {
  return a + b
};

var add = (a, b) => a + b;
console.log(add(2,4));

//without curly bracket you don't need to have a return statement
//arrow functions do not lose 'this' binding or super
// (...args) => expression; to define an arrow function
// (...args) => { statements } to define an arrow function that has multiple statements