//Different ways of creating functions

function add (a, b) {
  return a + b;
};

var add = (a, b) => {
  return a + b
};

var add = (a, b) => a + b;

//without curly bracket you don't need to have a return statement
//arrow functions do not lose 'this' binding

console.log(add(2,4))